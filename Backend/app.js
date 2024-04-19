var express = require('express');
var app = express();
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");


require("dotenv").config();
require("./database/mongodb");

app.use(express.json());

const cors = require("cors");

app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
    preflightContinue: false,
}
));

app.use("/user", userRoutes);


app.get('/', function (req, res) {
  res.send('Hello World!');
});


const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});