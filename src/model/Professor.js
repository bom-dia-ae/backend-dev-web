const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  CPF: {
    type: Number,
    required: true,
    unique: true,
    primaryKey: true,
  },
  nome: {
    type: String,
    required: true,
  },
  disciplina: {
    type: String,
    required: true,
  },
  titulacao: {
    type: String,
    required: true,
  },
});

const modelName = "Professor";
const Professor =
  mongoose.connection && mongoose.connection.models[modelName]
    ? mongoose.connection.models[modelName]
    : mongoose.model(modelName, schema);
module.exports = Professor
