import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body.data;

//   console.log(req.body.data);

  const newUser = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  });

//   console.log(newUser);

  res.status(200).json(newUser.username);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
