const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  chef:{
    type: String,
    required: true,
  },
  supplier:{
    type: String,
    required: true,
  },
  taste: {
    type: String,
  },
  category: {
    type: String,
  },
  details: String,
  photo: {
    type: String,
    default: "https://i.ibb.co/5XKdrzBg/mike-kenneally-t-NALo-IZhq-VM-unsplash.jpg",
    set: (value) =>
      value && value.trim() !== ""
        ? value
        : "https://i.ibb.co/5XKdrzBg/mike-kenneally-t-NALo-IZhq-VM-unsplash.jpg",
  },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);
module.exports = Coffee;

