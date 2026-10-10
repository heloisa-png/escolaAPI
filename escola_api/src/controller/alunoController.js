const alunoRepository = require('../repositories/alunoRepository')

//listar alunos
const listarAlunos = async (req, res) => {
    try {
        const alunos = await alunoRepository.getALLalunos()


        return res.status(200).json({
            mensagem: 'Alunos encontrados',
            aluno: alunos
        })

    } catch (erro) {
        console.error(erro.mensage)
        res.status(500).json({ mensagem: 'Erro interno' })
    };
};

//criar  
const criarAluno = async (req, res) => {
    try {
        const { nome, email } = req.body

        if (!nome || email === undefined) {
            return res.status(400).json({
                mensagem: 'Nome e email obrigatórios.'
            });
        };

        //tinha esquecido dessa parte mais importante kk :p
        const aluno = await alunoRepository.createAlunos(nome, email);
        return res.status(201).json({
            mensagem: 'aluno cadastrado com sucesso!',
            aluno: aluno
        });

    } catch (erro) {
        console.error(erro.mensagem)
        res.status(500).json({ mensagem: 'erro ao cadastrar aluno' })
    };
};

//atualizar 
const atualizarAluno = async (req, res) => {
    try {
        const dados = req.body;
        const id = req.params.id

        const aluno = await alunoRepository.updateAluno(
            dados.nome,
            dados.email,
            id
        );
        if (aluno.length === 0) {
            return res.status(404).json({
                mensagem: 'Aluno não encontrado'
            });
        };
        return res.status(200).json({
            mensagem: 'Aluno atualizado com sucesso',
            aluno: aluno
        });

    } catch (erro) {
        console.error('Erro ao atualizar aluno', erro.mensage);
        return res.status(500).json({ mensagem: 'Erro interno ao atualizar aluno.' })
    };
};

const deletAluno = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ mensagem: 'O ID invalido.' });
    }

    try {
        const aluno = await alunoRepository.deleteAluno(id);
        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
        }
        return res.json({
            mensagem: 'aluno deletado com sucesso.', 
            deletado: aluno
        });
    } catch (erro) {
        console.error('Erro ao deletar aluno:', erro.message);
        return res.status(500).json({ mensagem: 'Erro interno ao deletar aluno.' });
    }
};


module.exports = {
    listarAlunos,
    criarAluno,
    atualizarAluno,
    deletAluno
};