const { connect } = require("mongoose");
const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    console.log("Conectando-se ao MongoDB...");
    await connect(
      "mongodb+srv://tentativa1:aleatoriedades@cluster0.oqgycpl.mongodb.net"
    );
    console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.log("Falha ao conectar-se ao MongoDB: ", error);
  }
};

module.exports = mongoConnect;
