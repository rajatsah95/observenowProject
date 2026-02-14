import express from "express";
import cors from "cors";
import contactsRouter from "./routes/contacts.js";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Contact Management" });
});
app.use("/api/contacts", contactsRouter);

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
