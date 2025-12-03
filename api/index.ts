import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (_, res) => {
  res.send("API funcionando");
});

export const handler = serverless(app);
