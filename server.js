const connectDB = require("./database/db");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const category = require("./routes/category");


const { readdirSync } = require("fs");

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
app.use(bodyParser.json({ limit: "2mb" }));
app.use("/api/signup", signUp);
app.use("/api/signin", signIn);
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));


connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("This is the API server");
});
