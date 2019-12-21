const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});

/*
heroku  https://git.heroku.com/react-igal-expensify.git (fetch)
heroku  https://git.heroku.com/react-igal-expensify.git (push)
origin  https://github.com/igal-sources/expensify-app.git (fetch)
origin  https://github.com/igal-sources/expensify-app.git (push)
*/
