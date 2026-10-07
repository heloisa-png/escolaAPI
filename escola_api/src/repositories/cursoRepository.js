const pool = require('../config/db');

// Pegar todos os cursos
const getALLCursos = async (limit, offset) => {
    const sql = `SELECT * FROM cursos LIMIT $1 OFFSET $2`;

    const resultado = await pool.query(sql, [limit, offset]);
    return resultado.rows;
};

// Criar
const createCursos = async (nome, vagas) => {
    const sql = `
        INSERT INTO cursos (nome, vagas)
        VALUES ($1, $2)
        RETURNING *
    `;

    const resultado = await pool.query(sql, [nome, vagas]);
    return resultado.rows;
};

// Atualizar
const updateCursos = async (id, nome, vagas) => {
    const sql = `
        UPDATE cursos
        SET nome = $1, vagas = $2
        WHERE id = $3
        RETURNING *
    `;

    const resultado = await pool.query(sql, [nome, vagas, id]);
    return resultado.rows;
};

// Deletar
const deleteCursos = async (id) => {
    const sql = `DELETE FROM cursos WHERE id = $1 RETURNING id`;

    const resultado = await pool.query(sql, [id]);
    return resultado.rows;
};

module.exports = {
    getALLCursos,
    createCursos,
    updateCursos,
    deleteCursos
};