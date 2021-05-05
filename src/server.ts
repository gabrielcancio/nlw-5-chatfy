import express from "express";
import "./database/connection";

const app = express();

app.get("/", (request, response) => {
  const data = {
    event: "NLW",
    version: 5,
    active: true,
  };

  return response.json({ data });
});

app.post("/", (request, response) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400).json({ error: "Name is a riquered field!!" });
  }

  return response.status(201).send();
});

app.listen(3333, () =>
  console.log("Server is running at http://localhost:3333")
);
