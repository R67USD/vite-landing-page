import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./routes/email.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", sendEmail);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log("Server running on port 3000"));
