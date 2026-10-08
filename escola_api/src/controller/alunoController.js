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

//criar  
const criarAluno = async (req, res) => {
    try {
        const { nome, email } = req.body

        if (!nome || email === undefined) {
            return res.status(400).json({ mensagem: 'Nome e email obrigatórios.' });
        }
    } catch (erro) {
        console.error(erro.mensagem)
        res.status(500).json({ mensagem: 'erro ao cadastrar aluno' })
    };
};

//atualizar 
const atualizarAluno = async (res, req) => {
    const id = parseID(req.params.id)
    if (!id) {
        return res.status(400).json({
            mensagem: 'Adicione seus dados.'
        });
    };

    try {
        const pedido = await alunoRepository.updateAluno(
            id,
            dados.nome,
            dados.email
        );
    }
    if (!pedido) {
        return res.status(404).json({
            mensagem: 'Aluno não encontrado.'
        })
    }
}


module.exports = {
    listarAlunos,
    criarAluno
};