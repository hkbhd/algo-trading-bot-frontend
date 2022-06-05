// Connecting to the Database
// Mongoose specific code
const connectToMongo=require('./db')
connectToMongo();

// ExpressJS specific things
const express = require('express');
const { fetchUser } = require('./middleware/fetchUser');
const app = express();
const port = 5000;

// middleware used to send json response
app.use(express.json());

// Available routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})