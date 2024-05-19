import express from "express";

const app = express();

app.get("/p1", (req, res) => {
  res.send("hello world!!").status(234);
});

app.listen(3000);
