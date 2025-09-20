import express from "express";

const app = express();
const port = process.env.PORT ? +process.env.PORT : 8000;

app.use(express.json());

app.use("/", (req, res) => {
  return res.json({ status: `success`, message: `Server is up now.` });
});

app.listen(port, () => {
  console.log(`Server is up: http://localhost:${port}`);
});
