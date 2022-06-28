/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("mongoose")




/////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make review schema
const reviewSchema = new Schema({
  username: String,
  name: String,
  content: String,
  rating: { type: Number, min: 1, max: 5, default: 5 }
}, {
  timestamps: true
});

// make review model
const Review = model("Review", reviewSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Review