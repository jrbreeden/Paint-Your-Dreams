///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection");
const Review = require("./review");

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function
const startReviews = [
    { content: "review1", rating: 1},
    { content: "review2", rating: 2 },
    { content: "review3", rating: 3 },
    { content: "review4", rating: 4 },
    { content: "review5", rating: 5 },
];
 
// Delete all reviews
Review.deleteMany({})
.then((deletedReviews) => {
  // add the starter reviews
  Review.create(startReviews)
    .then((newReviews) => {
      // log the new reviews to confirm their creation
      console.log(newReviews);
      db.close();
    })
    .catch((error) => {
      console.log(error);
      db.close();
    });
})
.catch((error) => {
  console.log(error);
  db.close();
});

})