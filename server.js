const express = require("express");
const app = express();
const port = 3000;
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

// app.use("/cache/:username", (request, response) => {
//   const { username } = request.params;
//   cache.get("username").then((res) => {
//     if (res.data) {
//       console.log(res.data);
//     } else {
//       cache
//         .set("username", username, 60000)
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
