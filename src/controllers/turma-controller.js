const {
  create_turma,
  deleteById_turma,
  getById_turma,
  updateById_turma,
} = require("../repository/turma-repository");

const FIELDS_TURMA = ["disciplina", "sala", "id_professor", "alunos"];

module.exports = class TurmaController {
  static async create(req, res) {
    try {
      await create_turma(req.body);
      res.sendStatus(201);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async delete(req, res) {
    const found_turma = await getById_turma(req.body.id);
    if (!found_turma) {
      return res.sendStatus(404);
    }
    await deleteById_turma(req.body.id);
    res.sendStatus(200);
  }

  static async get(req, res) {
    const id = req.params.id;
    const aluno = await getById_turma(id);
    if (!aluno) {
      return res.sendStatus(404);
    }
    res.status(200).send(aluno);
  }

  static async update(req, res) {
    const id = req.params.id;
    const found_turma= await getById_turma(id);
    if (!found_turma) {
      return res.sendStatus(404);
    }
    if (!FIELDS_TURMA.includes(Object.keys(req.body)[0])) {
      return res.sendStatus(404);
    }
    try {
      await updateById_turma(id, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.send(error.message);
    }
  }
};
