const {
  create_boletim,
  getByCPF_boletim,
  deleteById_boletim,
  getById_boletim,
  updateById_boletim,
} = require("../repository/boletim-repository");

const FIELDS_BOLETIM = ["nota_final", "aprovacao", "id_aluno", "id_turma"];

module.exports = class BoletimController {
  static async create(req, res) {
    const found_aluno = await getByCPF_boletim(req.body.CPF);
    if (found_aluno) {
      return res.sendStatus(302);
    }
    try {
      await create_boletim(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  static async delete(req, res) {
    const found_boletim = await getById_boletim(req.body.id);
    if (!found_boletim) {
      return res.sendStatus(404);
    }
    await deleteById_boletim(req.body.id);
    res.sendStatus(200);
  }

  static async get(req, res) {
    const id = req.params.id;
    const aluno = await getById_boletim(id);
    if (!aluno) {
      return res.sendStatus(404);
    }
    res.status(200).send(aluno);
  }

  static async update(req, res) {
    const id = req.params.id;
    const found_boletim = await getById_boletim(id);
    if (!found_boletim) {
      return res.sendStatus(404);
    }
    if (!FIELDS_BOLETIM.includes(Object.keys(req.body)[0])) {
      return res.sendStatus(404);
    }
    try {
      await updateById_boletim(id, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.send(error.message);
    }
  }
};
