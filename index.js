const express = require("express");
const app = express();
const { request } = require("./bd/bd");

app.get("/users", (req, res) => {
  request.query("SELECT * FROM vmCartao").then((result) => {
    res.json(result.recordset);
  });
});

app.listen("3000", () => {
  console.log("Logado em http://localhost:3000");
});
