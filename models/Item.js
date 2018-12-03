const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
//We will modify this to hold inventory items
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number,
    default: 0
  },
  purchasePrice: {
    type: Number,
    default: 0
  },
  sellPrice: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: "No Description Set."
  },
  barcode: {
    type: String,
    default: ""
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
