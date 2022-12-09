const {
  create_aluno,
  getByCPF_aluno,
  deleteByCPF_aluno,
  updateByCPF_aluno,
} = require("../repository/alunos-repository");

const FIELDS_ALUNO = ["nome", "numero_matricula", "CPF"];

module.exports = class AlunosController {
  static async create(req, res) {
    const found_aluno = await getByCPF_aluno(req.body.CPF);
    if (found_aluno) {
      return res.sendStatus(302);
    }
    try {
      await create_aluno(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  static async delete(req, res) {
    const found_aluno = await getByCPF_aluno(req.body.CPF);
    if (!found_aluno) {
      return res.sendStatus(404);
    }
    await deleteByCPF_aluno(req.body.CPF);
    res.sendStatus(200);
  }

  static async update(req, res) {
    const cpf = req.params.cpf;
    const found_aluno = await getByCPF_aluno(cpf);
    if (!found_aluno) {
      return res.sendStatus(404);
    }
    if (!FIELDS_ALUNO.includes(Object.keys(req.body)[0])) {
      return res.sendStatus(404);
    }
    try {
      await updateByCPF_aluno(cpf, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.send(error.message);
    }
  }

  static async get(req, res) {
    const cpf = req.params.cpf;
    const aluno = await getByCPF_aluno(cpf);
    if (!aluno) {
      return res.sendStatus(404);
    }
    res.status(200).send(aluno);
  }
};
