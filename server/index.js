const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Trip = require("./models/trip");

const secretKey = "your_secret_key";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Test User Data
const users = [];

const User1 = new User("test", "test");
const Trip1 = new Trip("New York, NY");

Trip1.departureDate.setDate(5, 10, 2024);
Trip1.returnDate.setDate(5, 12, 2024);
Trip1.setflight("LGA", "YYZ", "384JSUFH");
Trip1.setAccommodation("110 Road", "SAIHF314");
Trip1.addActivity("Empire State", "Midtown");
User1.addTrip(Trip1);

const Trip2 = new Trip("Washington, DC");

Trip2.departureDate.setDate(7, 22, 2024);
Trip2.returnDate.setDate(7, 30, 2024);
Trip2.setflight("DUL", "JFK", "13D8JF5H");
Trip2.setAccommodation("29 Strret", "SF3142JW");
Trip2.addActivity("White House", "National Park");
User1.addTrip(Trip2);

users.push(User1);



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
