const pool = require('../config/db');

//Pegar todos os cursos  
const getCursos = async (limit, offset) =>{
    const sql = `SELECT * FROM cursos LIMIT $1 OFFSET $2`

    const resultado = await pool .query(sql,[limit,offset]);
    return resultado.rows;
};

//criar  
const createCursos = async (nome, vagas) =>{
    const sql= `INSERT INTO alunos (nome, vagas)
    VALUES ($1, $2) RETUNING *`;

    const resultado = await pool.query(sql,[nome, vagas]);
    return resultado.rows;
};

//atualizar
const updateCursos = async (nome, email, id) =>{
    const sql= `UPDATE alunos SET $1 = nome, $2 = email, WHERE id = 4$ RETURNING *`

    const resultado = await pool.query(sql,[nome, email]);
    return resultado.rows;
};

//terminarkk 

//deletar
const deleteCursos = async (id)=>{
    const sql = 'DELETE FOM  alunos $1= id RETURNING*'
    const resultado = await pool.query(sql, [id])
    return resultado
}

module.exports = {
    getCursos,
    createCursos,
    updateCursos,
    deleteCursos
};