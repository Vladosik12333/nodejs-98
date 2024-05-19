import express from "express";
const PORT = 3000;
const app = express();

app.get("/p1", (_, res) => {
  res.send("hello world!!").status(234);
});

app.use((_, res) => {
  res.status(404).json({ message: "This route not found" });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server crushed. error: ", error);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
