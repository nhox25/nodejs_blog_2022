const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worldssssaaawwsssw!!");
});

app.listen(port, () => {
  console.log(`Example app listening onn port ${port}`);
});
