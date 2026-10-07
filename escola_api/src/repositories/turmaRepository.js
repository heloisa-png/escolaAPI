const pool = require('../config/db');

//puxar todos
const getALLturmas = async ()=>{
    const sql = ``;

    const resultado = await pool.query(sql);
    return resultado.rows;
};

//criar 
const createTurmas = async (aluno_id, curso_id, data_matricula)=>{
    const sql = ``;

    const resultado = await pool.query(sql, [aluno_id, curso_id, data_matricula]);
    return resultado.rows;
};

//atualizar 
const updateTurmas = async (aluno_id, curso_id, data_matricula, id)=>{
    const sql = ``;

    const resultado = await pool.query(sql, [aluno_id, curso_id, data_matricula, id]);
    return resultado.rows;
};

//deletar 
const deleteTurmas = async (id)=>{
    const sql = ``;

    const resultado = await pool.query(sql, [id]);
    return resultado.rows;
};


module.exports = {
    getALLturmas,
    createTurmas,
    updateTurmas,
    deleteTurmas

}