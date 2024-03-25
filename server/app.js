const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("./config/dbConfig");
const authRouter = require("./routers/authRouter");
const postRouter = require('./routers/postRouter');
const cors = require("cors");
const ErrorHandler = require("./midellewares/ErrorHandler/ErrorHandler");
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(ErrorHandler);
// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["*"],
  })
);

// Routes
app.use("/auth", authRouter);
app.use('/posts', postRouter);
// Default route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
