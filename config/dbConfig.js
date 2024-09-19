const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Environment variable configuration
dotenv.config({ path: "../.env" });

// Database Connection function
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Mongo URI is not defined in environment variables!");
  process.exit(1); // Exit process if MONGO_URI is not provided
}

const databaseConnection = () => {
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log("Database Connected Successfully!");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit process with failure
    });
};

module.exports = databaseConnection;
