const connectDB = require("./database/db");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const authRoutes = require("./routes/auth");

//middleware
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
    origin: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("This is the API server");
});
