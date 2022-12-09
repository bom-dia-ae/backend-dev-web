const ESCOLA = {
  logo: "https://media.discordapp.net/attachments/1040389551753011213/1050094580156080198/PicsArt_12-07-01.58.19.png",
  nome: "Tralalá",
  cnpj: "11.444.777/0001-52",
  endereco: "Rua da esquina, 18, Salvador/BA"
}

module.exports = class EscolaController {
  static async get(req, res) {
    res.status(200).send(ESCOLA);
  }
};
