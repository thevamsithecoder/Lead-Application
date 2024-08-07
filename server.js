const express = require("express");
const app = express(); 
const dotenv = require("dotenv"); //to store the sensitive data 
const connectDB = require("./database/db");
const leadRoutes = require("./routes/leadRoutes");
const cors = require("cors");
dotenv.config()
const path = require("path");
//middlewares
app.use(cors())

app.use(express.json()) 
app.use(express.static(path.join(__dirname, "./Client/dist")));

app.use("/api", leadRoutes);

app.use("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./Client/dist/index.html"))
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
  console.log(`Server running on ${PORT}`);
})

connectDB();