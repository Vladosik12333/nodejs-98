import app from "./src/app.js";
import { PORT } from "./src/config.js";

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server crushed. error: ", error);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
