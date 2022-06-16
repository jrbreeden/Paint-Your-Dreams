////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Review = require("../models/review");
const Painter = require("../models/painter");
const { reset } = require("nodemon");
/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login")
  }
})


/////////////////////////////////////////
// Routes
/////////////////////////////////////////

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

  // create route
router.post("/", (req, res) => {
  console.log("params", req.body)
  const id = req.body.id
  let reviewId
    // add username to req.body to track related user
    req.body.username = req.session.username;
    Review.create(req.body)
      .then((reviews) => {
        reviewId = reviews._id
       // console.log("reviews", reviews)
        Painter.findById(id)
        .then((painter) => {
          console.log("please work",painter)
          painter.reviews.push(reviewId)
          painter.save()
        })
        // redirect user to index page if successfully created item
        res.redirect(`/painters/${id}`)
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  // edit route
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the review from the database
    Review.findById(id)
      .then((review) => {
        // render edit page and send review data
        res.render("reviews/edit.liquid", { review });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  // Update route
router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    Painter.findById()
    Review.findByIdAndUpdate(id, req.body,{ new: true })
    // update the review
      .then((review) => {
        // redirect to main page after updating
        res.redirect("/painters")
      })
      // send error as json
      .catch((error) => {
        console.log(error)
        res.json({ error })
      })
  })

  // Delete route
  router.delete('/delete/:painterId/:reviewsId', (req, res) => {
    // parse out ids
    const painterId = req.params.painterId
    console.log("this is the painter ID:/n", painterId)
    const reviewsId = req.params.reviewsId
    console.log("ReviewsID:/n", reviewsId)
    MyPainters.findById(painterId)
      .then(painter => {
        console.log("this is the painter reviews", painter.reviews)
        const theReviews = Painter.reviews.id(reviewsId)
        console.log("this is the review:/n", theReviews)
        if ( theReviews.author == req.session.userId) {
          console.log(theReviews.author)
          theReviews.remove()
          return painter.save()
        } else {
          return
        }
      })
      .then(painter => {
        res.redirect(`/painters/my_painters/${painter.id}`)
      })
      .catch(error => {
        console.log(error)
        res.send(error)
      })
    })
       
  
  // show route
  router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;

    // find the particular review from the database
    Review.findById(id)
    .then((review) => {
        console.log(review);
        // render the template with the data from the database
        res.render("reviews/show.liquid", { review});
    })
    .catch((error) => {
        console.log(error);
        res.json({ error });
    });
  });
  
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
