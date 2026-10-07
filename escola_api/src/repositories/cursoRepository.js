const pool = require('../config/db');

//Pegar todos os cursos  
const getCursos = async (limit, offset) =>{
    const sql = ``

    const resultado = await pool.query(sql,[limit,offset]);
    return resultado.rows;
};

//criar  
const createCursos = async (nome, vagas) =>{
    const sql= ``;

    const resultado = await pool.query(sql,[nome, vagas]);
    return resultado.rows;
};

//atualizar
const updateCursos = async (id) =>{
    const sql= ``;

    const resultado = await pool.query(sql,[nome, vagas, id]);
    return resultado.rows;
};

//deletar
const deleteCursos = async (id)=>{
    const sql = ``;
    const resultado = await pool.query(sql, [id]);
    return resultado.rows
}

module.exports = {
    getCursos,
    createCursos,
    updateCursos,
    deleteCursos
};