// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyDHNIjVU3N-noFomiarsHvdh7IcGk_FHc8",
    authDomain: "rps-database-33456.firebaseapp.com",
    databaseURL: "https://rps-database-33456.firebaseio.com",
    projectId: "rps-database-33456",
    storageBucket: "rps-database-33456.appspot.com",
    messagingSenderId: "699960990417"
  };
    
// Assign the reference to the database to a variable named 'database'
// var database = ...
firebase.initializeApp(config);

var database = firebase.database();

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;