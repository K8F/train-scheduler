console.log("is this working?")

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



//calculate train times
    //calculate the difference between the first train and frequency (min)
    //caclulate remainder of diff & frequency
    //subtract frequency from the remainder


//add new trains
    //create on-click for #add-train
    //reset form
    //push user input to the database








});