import { connection, model, Schema } from "mongoose";

const schema = new Schema({
  CNPJ: {
    type: Number,
    required: true,
    unique: true,
    primaryKey: true,
  },
  nome: {
    type: String.length(60),
    required: true,
  },
  endereco: {
    type: String.length(120),
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const modelName = "Escola";

export const Escola =
  connection && connection.models[modelName]
    ? connection.models[modelName]
    : model(modelName, schema);
