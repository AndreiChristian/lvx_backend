import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response, next) => {
  res.json({ message: "Hello" });
});

app.listen(8080);
