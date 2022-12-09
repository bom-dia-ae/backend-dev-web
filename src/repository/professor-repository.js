const Professor = require("../model/Professor");

async function create_professor(professor) {
  return new Professor(professor).save()
}
async function getByCPF_professor(cpf) {
  return Professor.findOne({ CPF: cpf });
}
async function deleteByCPF_professor(cpf){
  return Professor.deleteOne({CPF: cpf})
}
async function updateByCPF_professor(cpf, data){
  return Professor.updateOne({CPF: cpf}, { $set: data })
}
module.exports = {
  create_professor: create_professor,
  getByCPF_professor: getByCPF_professor,
  deleteByCPF_professor: deleteByCPF_professor,
  updateByCPF_professor: updateByCPF_professor
};
