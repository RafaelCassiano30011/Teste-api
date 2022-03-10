import express from "express";
import cors from "cors";

let acertos = 0;
let errors = 0;
let money = 17;
let numberAcertos = [];
let mostWrongStrategy = [];
let mostAcertosStrategy = [];

export const app = express();
app.use(express.json());
app.use(cors());

app.get("/get", (req, res) => {
  res.send({ acertos, errors, money, numberAcertos, mostAcertosStrategy, mostWrongStrategy });
});

app.post("/post", (req, res) => {
  const { body } = req;

  acertos = body.acertos;
  errors = body.errors;
  money = body.money;
  numberAcertos = body.mostWrongStrategy;
  mostAcertosStrategy = body.mostAcertosStrategy;

  res.send(`tudo ok`);
});

app.listen(process.env.PORT || 3333, () => console.log("servidor ligado"));
