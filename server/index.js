const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./user");

const secretKey = "your_secret_key";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Test User Data
const users = [];
users.push(
  new User("test", "test", [
    { destination: "Paris", date: "2024-05-01", description: "Business trip" },
    { destination: "New York", date: "2024-06-01", description: "Vacation" },
  ])
);

// Test User Registry
app.get("/api/logins", async (req, res) => {
  const userJsonArray = users.map((user) => user.toJSON());

  res.json({ users: userJsonArray });
});

function authenticate(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (users.some((user) => user.username === username)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User(username, password);
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/api/trips", authenticate, (req, res) => {
  const user = users.find((user) => user.username === req.user.username);
  if (user) {
    res.json({ trips: user.trips });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
