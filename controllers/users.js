////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs");
const { response } = require("express");


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

router.post("/signup", (req, res) => {
    res.send("signup")
})

// The login Routes (Get => form, post => submit form)
router.get("/login", (req, res)=> {
    res.render("user/login.liquid");
})

router.post("/login",(req, res) => {
    res.send("login")
})