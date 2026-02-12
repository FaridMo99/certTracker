import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const file = await fs.readFile("./count.json", "utf-8");
    const count = JSON.parse(file);
    return res.status(200).json(count);
  } catch (error) {
    return res.status(200).json({ count: 0 });
  }
});

app.post("/", async (req, res) => {
  try {
    const { count } = req.body;
    const newData = { count: Number(count) };

    await fs.writeFile(
      "./count.json",
      JSON.stringify(newData, null, 2),
      "utf-8",
    );

    return res.status(200).json({ message: "Count updated!", count });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to write to file" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
