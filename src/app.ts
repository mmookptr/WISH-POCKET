import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";

const app: express.Application = express();

// If you do not have .env please uncomment these 2 lines
// const host = "localhost"
// const port = 3000

// and comment these 2 lines
const host = process.env.HOST as string;
const port = parseInt(process.env.PORT as string);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.listen(port, host, () => {
  console.log(`Application is running at http://${host}:${port}`);
});
