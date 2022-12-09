const { connection, model, Schema } = require("mongoose");

const schema = new Schema({
  nota_final: {
    type: Number,
    required: true,
  },
  aprovacao: {
    type: Boolean,
    required: true,
  },
  id_aluno: {
    type: Number,
    required: true,
    references: {
      model: "Aluno",
      key: "CPF",
    },
  },
  id_turma: {
    type: Number,
    required: true,
    references: {
      model: "Turma",
      key: "id_turma",
    },
  },
});

const modelName = "Boletim";

const Boletim =
  connection && connection.models[modelName]
    ? connection.models[modelName]
    : model(modelName, schema);

module.exports = Boletim;
