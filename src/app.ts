import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app: express.Application = express();

const host = process.env.HOST as string;
const port = parseInt(process.env.PORT as string);

app.get("/", (request, response) => {
  response.send("Hello");
});

app.listen(port, host, () => {
  console.log(`Application is running at http://${host}:${port}`);
});
