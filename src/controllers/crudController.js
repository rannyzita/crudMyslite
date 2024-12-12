const connection = require("../database/connection.js");

module.exports = {

    async GetAll (req, res) {
        let Alunos = connection;
        Alunos = await connection("Alunos").select("*");
        return res.json(Alunos);
    },

    async GetId (req, res) {
        try {
            // desestruturação
            // td q tiver no dado, vou querer somente o id
            const {id} = req.params;
            const existe = await connection("Alunos").where("id", id).first();
            let Aluno = connection;

            if (!existe) {
                return res.status(404).send("Id não encontrado");
            } else {
                Aluno = await connection("Alunos").select("*").where("id", id);
                return res.json(Aluno);
            }
        } catch (error) {
            return res.status(500).send(error);
        }
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

    async Update (req, res) {
        try {
            const {id} = req.params;
            const {Nome, idade, NumChamada} = req.body;
            const existe = await connection("Alunos").where("id", id).first();

            if(!existe) {
                return res.status(404).send("Id não encontrado");
            } else {
                // vai fazer a inserção do dado
                await connection("Alunos").update({
                Nome: Nome,
                idade: idade,
                NumChamada: NumChamada,
            }).where("id", id);
                return res.status(200).send("Deu certo a alteração do registro.");
            }
        } catch (error) {
            return res.status(500).send(error);
        } 
    },

    async Delete (req, res) {
        try {
            const {id} = req.params;

            // vai fazer a inserção do dado
            await connection("Alunos").delete().where("id",id);
            return res.status(200).send("Deu certo a remoção do registro.");
        } catch (error) {
            return res.status(500).send(error);
        } 
    },
}
