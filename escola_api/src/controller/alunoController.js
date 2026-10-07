const alunoRepository = require('../repositories/alunoRepository')

//listar alunos
const listarAlunos = async (req, res) => {

    try {
        const alunos = await alunoRepository.getALLalunos()


        return res.status(200).json({
            mensagem: 'Alunos encontrados',
            Estudantes: alunos
        })

    } catch (erro) {
        console.error(erro.mensagem)
        res.status(500).json({ mensagem: 'Erro interno' })
    };
};

//criar TERMINAR 
const criarAluno = async (req, res) => {
    try {
        const { nome, email } = req.body

        if (!nome || email === undefined) {
            return response.status(400).json({ mensagem: 'Nome e email obrigatórios.' });
        }
    }

};

module.exports = {
    listarAlunos
};