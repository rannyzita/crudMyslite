const connection = require("../database/connection.js");

module.exports = {

    async GetAll (req, res) {
        let Alunos = connection;
        Alunos = await connection("Alunos").select("*");
        return res.json(Alunos);
    },

    async Post (req, res) {
        const {Nome, idade, NumChamada} = req.body;

        // vai fazer a inserção do dado
        const [id] = await connection("Alunos").insert({
            Nome,
            idade,
            NumChamada,
        });

        return res.json({id});
    },
}
