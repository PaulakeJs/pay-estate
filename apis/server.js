const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcryptjs");
require("dotenv").config();
const db = require("./config/db");
const User = require("./models/usersModel");
const usersRoutes = require("./Routes/usersRoutes");
const listingsRoutes = require("./Routes/listingsRoute");
app.use(cors());

app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/listing", listingsRoutes);

// deployment logic
const path = require("path");
__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
