const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

const api = process.env.api_key;

const { json, urlencoded } = express;
const { join } = require("path");

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));
app.use("/api", require("./src/routes/index"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(api);
});
