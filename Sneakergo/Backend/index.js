import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://rohan:rohan631@cluster0.iromq4a.mongodb.net/Rohan"
);

// Define a schema and model
const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  gender: String,
  color: String,
  price: Number,
  professionals: String,
});

const Card = mongoose.model("Card", cardSchema);
app.get("/rohan31", async (req, res) => {
  try {
    const cards = await Card.find(); // Retrieve all documents from the "cards" collection
    console.log(cards); // Log the retrieved documents to the console
    res.json(cards); // Send the retrieved documents as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  professionals: String,
});
const UserData = mongoose.model("UserData", userSchema);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Define the model for login data
// Define the model for login data
const Login = mongoose.model("Login", loginSchema);

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the email is already registered
    const existingUser = await Login.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    // Create a new user account
    const newUser = new Login({ email, password }); // Use Login model here
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Sign-in route
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    // Authentication successful
    res.json({ message: "Authentication successful" });
  } catch (error) {
    console.error("Error signing in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const cartSchema = new mongoose.Schema({
  cartid: String,
});
const CartData = mongoose.model("CartData", cartSchema);

app.post("/cart", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const newItem = new CartData({ cartid: id });
    await newItem.save();
    res.status(200).json({ message: "Item added to cart", item: newItem });
  } catch (error) {
    res.status(500).json({ error: "Error saving item to cart" });
  }
});

app.get("/cartid", async (req, res) => {
  try {
    const items = await CartData.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart items" });
  }
});
app.post("/removecart", async (req, res) => {
  const { id } = req.body;

  try {
    const removedItem = await CartData.findOneAndDelete({ cartid: id });
    if (removedItem) {
      res.json({ success: true, item: removedItem });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error removing item from cart" });
  }
});
