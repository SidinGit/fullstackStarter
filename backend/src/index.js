import dotenv from "dotenv";

import { app } from "./app.js";
import connectMongoDB from "./db/connectMongoDB.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

app.listen(PORT, () => {
  console.log(`Node JS server is running at http://localhost:${PORT}`);
  connectMongoDB();
});
