const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/google-books", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
console.log('Express server running on http://localhostL${PORT}');
});
