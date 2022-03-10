import express from "express";
import cors from "cors";

let infos = {};

export const app = express();
app.use(express.json());
app.use(cors());

app.get("/get", (req, res) => {
  res.send(infos);
});

app.post("/post", (req, res) => {
  const { body } = req;

  console.log(body);
  infos = body;

  console.log(infos, "post");

  res.send(infos);
});

app.listen(process.env.PORT || 3333, () => console.log("servidor ligado"));
