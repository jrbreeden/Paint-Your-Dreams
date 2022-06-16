const express = require("express")
const Painter = require ("../models/painter")

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();


/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// index route
router.get("/", (req, res) => {
    // find all the reviews
    Painter.find({ username: req.session.username })
      // render a template after they are found
      .then((painters) => {
        console.log(painters);
        res.render("painters/index.liquid", { painters });
      })
      // send error as json if they aren't
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  // new route
router.get("/new", (req, res) => {
    res.render("painters/new.liquid");
  });

  // create route
router.post("/", (req, res) => {
    // add username to req.body to track related user
    req.body.username = req.session.username;
    Painter.create(req.body)
      .then((painters) => {
        // redirect user to index page if successfully created item
        res.render("painters/show.liquid")
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
    // get the painter from the database
  Painter.findById(id)
      .then((painter) => {
        // render edit page and send painter data
        res.render("painters/edit.liquid", { painter });
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
    Painter.findByIdAndUpdate(id, req.body,{ new: true })
    // update the painter
      .then((painter) => {
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
  router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the review
    Painter.findByIdAndRemove(id)
      .then((painter) => {
        // redirect to main page after deleting
        res.redirect("/painters");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  
  // show route
  router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;

    // find the particular review from the database
    Painter.findById(id).populate("reviews").exec
    .then((painter) => {
        console.log(painter);
        // render the template with the data from the database
        res.render("painters/show.liquid", { painter});
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
