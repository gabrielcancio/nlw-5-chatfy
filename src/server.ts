import express from "express";

const app = express();

app.get("/", (request, response) => {
  const data = {
    event: "NLW",
    version: 5,
    active: true,
  };

  return response.json({ data });
});

app.listen(3333, () =>
  console.log("Server is running at http://localhost:3333")
);
