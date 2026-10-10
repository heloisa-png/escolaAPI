const cursoRepository = require('../repositories/cursoRepository');

//listar
const listarCursos = async (req, res)=>{
    try{
        const cursos = await cursoRepository.getALLCursos

        if(vagas === 0 ){
            return res.status(404).json({
                mensagem:'Curso com todas as vagas preenchidas.'
            })
        }
    }

}

module.exports = {

}