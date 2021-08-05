const express = require("express");
const app = express();
const port = 3000;

// init cache nodule
const NodeCache = require("node-cache");
const myCache = new NodeCache();

// express middleware
const { json, urlencoded } = express;
const { join } = require("path");

app.use(json());

app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

//api routes
const api = require("./src/routes/index");
app.use("/api", api);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
