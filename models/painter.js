//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose


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
         
        reviews: {
            type:[Schema.Types.ObjectId],
            ref:'Review'

        }
    },
    {timestamps:true}
    )
    
    // Make painter model
const Painter = model("Painter", painterSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Painter