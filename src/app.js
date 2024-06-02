import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

//

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.get("/p1", (_, res, next) => {
  try {
    throw {};
    res.send("hello world!!").status(234);
  } catch (error) {
    next(error);
  }
});

app.get("/p2", (_, res, next) => {
  try {
    throw {};
    res.send("hello world!!").status(234);
  } catch (error) {
    next(error);
  }
});

app.use((_, res) => {
  res.status(404).json({ message: "This route not found" });
});

//Middleware of Error
app.use((error, req, res, next) => {
  const { message = "Server internall error 344!", status = 500 } = error;
  res.status(status).json(message);
});


export default app;