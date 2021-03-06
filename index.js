const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
  });
  
  // Mock APIs
  app.get("/users", (req, res) => {
    res.json([
      { name: "Hello", location: "World" }
    ]);
  });