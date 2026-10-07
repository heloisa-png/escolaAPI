const pool = require('../config/db');

// Pegar todos os alunos
const getALLalunos = async (limit, offset) => {
    const sql = `SELECT * FROM alunos LIMIT $1 OFFSET $2`;

    const resultado = await pool.query(sql, [limit, offset]);
    return resultado.rows;
};

// Criar aluno
const createAlunos = async (nome, email) => {
    const sql = `INSERT INTO alunos (nome, email)
                 VALUES ($1, $2)
                 RETURNING *`;

    const resultado = await pool.query(sql, [nome, email]);
    return resultado.rows;
};

// Atualizar
const updateAluno = async (nome, email, id) => {
    const sql = `UPDATE alunos
                 SET nome = $1, email = $2
                 WHERE id = $3
                 RETURNING id`;

    const resultado = await pool.query(sql, [nome, email, id]);
    return resultado.rows;
};

// Deletar
const deleteAluno = async (id) => {
    const sql = `DELETE FROM alunos
                 WHERE id = $1
                 RETURNING id`;

    const resultado = await pool.query(sql, [id]);
    return resultado.rows;
};

module.exports = {
    getALLalunos,
    createAlunos,
    deleteAluno,
    updateAluno
};