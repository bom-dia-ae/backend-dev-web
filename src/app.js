const express = require("express");
const mongoConnect = require("./configs/database");
const alunosRouter = require("./routes/alunos-router");
const boletimRouter = require("./routes/boletim-router");
const professorRouter = require("./routes/professor-router");
const turmaRouter = require("./routes/turma-router");
const escolaRouter = require("./routes/escola-router");
const app = express();

mongoConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/alunos", alunosRouter);
app.use("/api/boletim", boletimRouter);
app.use("/api/professor", professorRouter);
app.use("/api/escola", escolaRouter);
app.use("/api/turma", turmaRouter);

const PORT = 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
