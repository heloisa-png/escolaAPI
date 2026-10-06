const pool = require('../config/db');

//Pegar todos os alunos 
const getALLalunos = async (limit, offset) =>{
    const sql = `SELECT * FROM alunos LIMIT $1 OFFSET $2`

    const resultado = await pool .query(sql,[limit,offset]);
    return resultado.rows;
};

//criar aluno 
const createAlunos = async (nome, emai) =>{
    const sql= `INSERT INTO alunos (nome, email)
    VALUES ($1, $2)  `
}

module.exports = {
 getALLalunos,
 createAlunos
}