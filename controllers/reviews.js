////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Review = require("../models/review");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
router.get("/seed", (req, res) => {
    // array of starter reviews
    const startReviews = [
        { content: "review1", rating: 1 },
        { content: "review2", rating: 2 },
        { content: "review3", rating: 3 },
        { content: "review4", rating: 4 },
        { content: "review5", rating: 5 },
    ];

    // Delete all reviews
    Review.deleteMany({}).then((data) => {
        // Seed Starter Reviews
        Review.create(startReviews).then((data) => {
            // send created reviews as response to confirm creation
            res.json(data);
        });
    });
});


// index route
router.get("/", (req, res) => {
    // find all the reviews
    Review.find({ username: req.session.username })
      // render a template after they are found
      .then((reviews) => {
        console.log(reviews);
        res.render("reviews/index.liquid", { reviews });
      })
      // send error as json if they aren't
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  // new route
router.get("/new", (req, res) => {
    res.render("reviews/new.liquid");
  });
  
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
