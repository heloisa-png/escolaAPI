const pool = require('../config/db');

//Pegar todos os alunos 
const getALLalunos = async (limit, offset) =>{
    const sql = `SELECT * FROM alunos LIMIT $1 OFFSET $2`

    const resultado = await pool .query(sql,[limit,offset]);
    return resultado.rows;
};

//criar aluno 
const createAlunos = async (nome, email) =>{
    const sql= `INSERT INTO alunos (nome, email)
    VALUES ($1, $2) RETUNING *`;

    const resultado = await pool.query(sql,[nome, email]);
    return resultado.rows;
};

//atualizar
const updateAluno = async (nome, email, id) =>{
    const sql= `UPDATE alunos SET $1 = nome, $2 = email, WHERE id = 4$ RETURNING *`

    const resultado = await pool.query(sql,[nome, email]);
    return resultado.rows;
};

//deletar
const deleteAluno = async (id)=>{
    const sql = 'DELETE FOM  alunos $1= id RETURNING*'
    const resultado = await pool.query(sql, [id])
    return resultado
}

module.exports = {
 getALLalunos,
 createAlunos,
 deleteAluno,
 updateAluno
};