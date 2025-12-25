require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(express.json());
app.use(cors());

const client = new MongoClient(process.env.DB_URL);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

const getCollection = (collectionName) => async (_req, res) => {
  try {
    const data = await db.collection(collectionName).find({}).toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

app.get("/best", getCollection("best"));
app.get("/coffee", getCollection("coffee"));
app.get("/filters", getCollection("filters"));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
