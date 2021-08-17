const express = require("express");
const app = express();
const port = 8000;
// const cache = require("./src/cache");

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
app.use("/user", require("./src/routes/user"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
