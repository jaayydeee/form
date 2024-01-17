const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const guarantorRoutes = require("./routes/guarantor");

app.use(cors())

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });
//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.json({limit: '50mb'}))

app.use("/guarantor", guarantorRoutes);

//to serve the frontend
app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get('/', (req, res) => {
//     res.send('Hello from our server!')
// })

// app.get("*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "./frontend/build/index.html"),
//     function (err) {
//       //res.status(500).send(err);
//       res.status(500).json(err);
//     }
//   );
// });

//Server Running
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running, you better catch it!");
});