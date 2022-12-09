const mongoose = require("mongoose");
const schema = mongoose.Schema({
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
  numero_matricula: {
    type: Number,
    required: true,
    unique: true,
    autoIncrement: true,
  },
  sala: {
    type: String,
    required: true,
    default: "1",
  },
});
const modelName = "Aluno";
const Aluno =
  mongoose.connection && mongoose.connection.models[modelName]
    ? mongoose.connection.models[modelName]
    : mongoose.model(modelName, schema);
module.exports = Aluno;
