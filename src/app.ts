import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app: express.Application = express();

// If you do not have .env please uncomment these 2 lines
// const host = "localhost"
// const port = 3000

// and comment these 2 lines
const host = process.env.HOST as string;
const port = parseInt(process.env.PORT as string);

app.get("/", (request, response) => {
  response.send("Helloo");
});

app.listen(port, host, () => {
  console.log(`Application is running at http://${host}:${port}`);
});
