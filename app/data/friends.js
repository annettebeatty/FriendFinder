// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name:"Ahmed",
    photo:"https://cdna.artstation.com/p/assets/images/images/011/496/380/20180624210831/smaller_square/crazy-jn-1806jazzbear.jpg?1529892511",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
  name:"Sarah",
  photo:"https://static.boredpanda.com/blog/wp-content/uploads/2016/01/crazy-dog-lady-photographs-smiling-dogs-to-make-people-smile-too__700.jpg",
  scores:[
      4,
      2,
      5,
      1,
      3,
      2,
      2,
      1,
      1,
      1
    ]
  } 
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;