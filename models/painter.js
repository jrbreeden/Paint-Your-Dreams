//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");
const Review = require("./review");

/////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make painter schema
const painterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        year: {
        type: Number,
        required: true,
        },
         
        reviews: [
             {type:Schema.Types.ObjectId,ref:"Review"},
    ],
    })

    // Make painter model
const Painter = model("Painter", painterSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Painter