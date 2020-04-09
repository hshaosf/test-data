require('dotenv').config()

const express = require("express");

const app = express();

const port = 5000;

const basicAuth = require('express-basic-auth')

app.use("/", basicAuth({
  challenge: true,
  realm: 'test-data',
  users: { "user" : process.env.LOGIN_PASS },
  unauthorizedResponse: 'Restricted area.'
}));

// Body parser
app.use(express.urlencoded({ extended: false }));

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
http://localhost:5000`);
});

app.get("/", (req, res) => {
    res.send("Welcome to a basic express App "+process.env.LOGIN_USER);
  });

app.post("/", (req, res) => {
  res.send("Welcome");
});
  
  // Mock APIs
  app.get("/users", (req, res) => {
    res.json([
      { name: "Hello", location: "World" }
    ]);
  });