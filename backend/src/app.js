import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//^ enable cross origins from where requests will be sent to the server
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, //^ allow cookies or authorization headers to be sent with the request
  })
);

//^ enable json requests and size limit
app.use(
  express.json({
    limit: "10mb",
  })
);

//^ enable requests from urls with further extended objects
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

//^ enabling storage of public assets in public folder(the folder above src), for example: pdf, images
app.use(express.static("public"));

//^ accessing the cookies in user's browser from server and perform crud operatrions on it
app.use(cookieParser());

//* routes import

//* routes declaration

export { app };
