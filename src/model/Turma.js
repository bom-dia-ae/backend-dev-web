const { connection, model, Schema } = require("mongoose");

const schema = new Schema({
  disciplina: {
    type: String,
    required: true,
  },
  sala: {
    type: String,
    required: true,
  },
  id_professor: {
    type: Number,
    required: true,
    references: {
      model: "Professor",
      key: "CPF",
    },
  },
  alunos: 
      {
        type: Array,
        ref: "Aluno",
        default: [],
      },
});

const modelName = "Turma";

const Turma =
  connection && connection.models[modelName]
    ? connection.models[modelName]
    : model(modelName, schema);

module.exports = Turma