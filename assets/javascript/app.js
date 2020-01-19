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