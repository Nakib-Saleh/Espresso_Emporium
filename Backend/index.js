require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Importing Schemas
const Coffee = require('./Schemas/coffee');


// middleware
app.use(cors());
app.use(express.json());




// Connect MongoDB
const MONGO_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

app.get("/coffee", async (req, res) => {
  const result = await Coffee.find();
  res.send(result);
});

app.post("/coffee", async (req, res) => {
  const data = req.body;
  //console.log(data);

  const coffee = new Coffee(data);
  const result = await coffee.save();
  res.send(result);
});

app.get("/coffee/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Coffee.findById(id);
  res.send(result);
});

app.delete("/coffee/:id", async (req, res)=>{
  const id = req.params.id;
  const result = await Coffee.findByIdAndDelete(id);
  res.send(result);
})

app.put ("/update/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  //console.log(data);
  //console.log(id);

  const result = await Coffee.findByIdAndUpdate(id, data, {new
  : true}); 
  res.send(result);
})

app.get("/", (req, res) => {
  res.send("Welcome to Espresso Emporium");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;