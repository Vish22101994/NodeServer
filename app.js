
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require("cors");
//middlewares
//app.use
// Routes
const postRoute = require('./routes/posts');
app.use(cors());
app.use(express.json());

app.use('/posts',postRoute);
app.get("/",(req,res) => {
  res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true, useUnifiedTopology: true },() => {
  console.log("Hello Connected To Mongo DB");
});

// How to we start listening to the server
app.listen(3000);
