const Turma = require("../model/Turma");

async function create_turma(turma) {
  return new Turma(turma).save();
}
async function getById_turma(id) {
  return Turma.findOne({ _id: id });
}
async function deleteById_turma(id) {
  return Turma.deleteOne({ _id: id });
}
async function updateById_turma(id, data) {
  return Turma.updateOne({ _id: id }, { $set: data });
}
module.exports = {
  create_turma: create_turma,
  deleteById_turma: deleteById_turma,
  getById_turma: getById_turma,
  updateById_turma: updateById_turma,
};
