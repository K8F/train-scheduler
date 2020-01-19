$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyBajUNJ0BZmYkT4HhL_Isal5IWuBXDGWX0",
        authDomain: "train-scheduler-e9440.firebaseapp.com",
        databaseURL: "https://train-scheduler-e9440.firebaseio.com",
        projectId: "train-scheduler-e9440",
        storageBucket: "train-scheduler-e9440.appspot.com",
        messagingSenderId: "516715021790",
        appId: "1:516715021790:web:5abfee0eceaddccedc494f",
        measurementId: "G-BQZX8CLZ0G"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

//show trains
    //get user input stored in database
    //use jQuery to append info to html
    //use moment.js to calculate next train time

    database.ref().on("child_added", function (snap) {
        //console.log(snap.key, snap.val())
        var train = snap.val()
        var info = calculateNext(train.firstTrain, train.frequency)   // we can return an array with the info (nexttrain, minutesaway)
        var rowTrain = `
            <tr>
                <td>${train.trainName}</td>
                <td>${train.destination}</td>
                <td>${train.frequency}</td>  
                <td>${info[0]}</td>
                <td>${info[1]}</td>
            </tr>`
        $("#add-row").append(rowTrain);

    });  

//calculate train times
    //calculate the difference between the first train and frequency (min)
    //caclulate remainder of diff & frequency
    //subtract frequency from the remainder
    function calculateNext(first, freq){
        var firstTrain = moment(first, "HH:mm:ss")
        //console.log("first:", firstTrain)
        var diff = moment().diff(firstTrain, "minutes")   //current*60  - first*60 = minutes
        var tRemainder = diff % freq
        var minutesAway = freq - tRemainder    //08:00  minutes in abosulutes   //substract (diff)
        var nextTrain = moment().add(minutesAway, "minutes").format("hh:mm A")   // plus (sum)
         //moment()= current time
         
         //console.log(nextTrain , minutesAway)
         return([nextTrain, minutesAway])
     
     }
 


//add new trains
    //create on-click for #add-train
    //reset form
    //push user input to the database
    $("#add-train").on("click", function () {
        event.preventDefault();
        var train = {
            trainName: $("#train-name").val(),
            destination: $("#destination").val(),
            firstTrain: $("#first-train").val(),
            frequency: $("#frequency").val()
        }

        //console.log(train);
        database.ref().push(train)
        // clear the form
        $("#train-name").val("");
        $("#destination").val("");
        $("#first-train").val("");
        $("#frequency").val("");

    }


    )


});