const Boletim = require("../model/boletim");

async function create_boletim(boletim) {
  return new Boletim(boletim).save();
}
async function getByCPF_boletim(cpf) {
  return Boletim.findOne({ CPF: cpf });
}
async function getById_boletim(id) {
  return Boletim.findOne({ _id: id });
}
async function deleteById_boletim(id) {
  return Boletim.deleteOne({ _id: id });
}
async function updateById_boletim(id, data) {
  return Boletim.updateOne({ _id: id }, { $set: data });
}
module.exports = {
  create_boletim: create_boletim,
  getByCPF_boletim: getByCPF_boletim,
  deleteById_boletim: deleteById_boletim,
  getById_boletim: getById_boletim,
  updateById_boletim: updateById_boletim,
};
