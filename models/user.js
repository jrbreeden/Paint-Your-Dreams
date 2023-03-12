//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection")

/////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// Make user schema
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// Make user model
const User = model("User", userSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User