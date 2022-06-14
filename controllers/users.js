////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs");



/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();


/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// The Signup Routes (Get => form, post => submit form)
router.get("/signup", (req, res) => {
    res.render("users/singup.liquid");
});

router.post("/signup", async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    // create user
    User.create(req.body)
    .then((user) => {
        // redirect to the login page
        res.redirect("/users/login")
    })
    .catch((error) => {
        // send error as json
        console.log(error);
        res.json({ error });
    });
});

// The login Routes (Get => form, post => submit form)
router.get("/login", (req, res)=> {
    res.render("user/login.liquid");
})

router.post("/login",(req, res) => {
    res.send("login")
})