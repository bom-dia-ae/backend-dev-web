const Aluno = require("../model/aluno");

async function create_aluno(aluno) {
  return new Aluno(aluno).save()
}
async function getByCPF_aluno(cpf) {
  return Aluno.findOne({ CPF: cpf });
}
async function deleteByCPF_aluno(cpf){
  return Aluno.deleteOne({id_aluno: cpf})
}
async function updateByCPF_aluno(cpf, data){
  return Aluno.updateOne({CPF: cpf}, { $set: data })
}
module.exports = {
  create_aluno: create_aluno,
  getByCPF_aluno: getByCPF_aluno,
  deleteByCPF_aluno: deleteByCPF_aluno,
  updateByCPF_aluno: updateByCPF_aluno
};
