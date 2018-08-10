
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>

// Initialize Firebase
var config = {
apiKey: "AIzaSyCtNZ1tzsBW95cT1Q2ExEls6Q5anE2890s",
authDomain: "friend-finder-7ce2f.firebaseapp.com",
databaseURL: "https://friend-finder-7ce2f.firebaseio.com",
projectId: "friend-finder-7ce2f",
storageBucket: "",
messagingSenderId: "860154501633"
};

var friendsData = [];
    
// Assign the reference to the database to a variable named 'database'
// var database = ...
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log("child_added ", childSnapshot.val());
    friendsData.push(childSnapshot.val());
});

//var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/survey", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

    // This code will need to push data into the friends array
    console.log("Post /api/survey", req.body);
    database.ref().push(req.body);
  });

};
