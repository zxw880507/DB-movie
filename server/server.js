const express = require("express");
const app = express();
const port = 8000;

const db = require("./src/db");

// express middleware
const { json, urlencoded } = express;
const { join } = require("path");

app.use(json());

app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

// api routes
const api = require("./src/routes/index");
app.use("/api", api);
//user routes
const user = require("./src/routes/user")(db);
app.use("/user", user);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
