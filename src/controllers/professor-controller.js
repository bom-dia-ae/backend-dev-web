const {
  create_professor,
  getByCPF_professor,
  deleteByCPF_professor,
  updateByCPF_professor
} = require("../repository/professor-repository");

const FIELDS_PROFESSOR = ["nome", "disciplina", "CPF", "titulacao"];

module.exports = class ProfessorController {
  static async create(req, res) {
    console.log(req.body)
    const found_professor = await getByCPF_professor(req.body.CPF);
    if (found_professor) {
      return res.sendStatus(302);
    }
    try {
      await create_professor(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  static async delete(req, res) {
    const found_professor = await getByCPF_professor(req.body.CPF);
    if (!found_professor) {
      return res.sendStatus(404);
    }
    await deleteByCPF_professor(req.body.CPF);
    res.sendStatus(200);
  }

  static async update(req, res) {
    const cpf = req.params.cpf;
    const found_professor = await getByCPF_professor(cpf);
    if (!found_professor) {
      return res.sendStatus(404);
    }
    if (!FIELDS_PROFESSOR.includes(Object.keys(req.body)[0])) {
      return res.sendStatus(404);
    }
    try {
      await updateByCPF_professor(cpf, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.send(error.message);
    }
  }

  static async get(req, res) {
    const cpf = req.params.cpf;
    const professor = await getByCPF_professor(cpf);
    if (!professor) {
      return res.sendStatus(404);
    }
    res.status(200).send(professor);
  }
};
