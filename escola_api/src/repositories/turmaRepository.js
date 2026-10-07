const pool = require('../config/db');

// Pegar todas as turmas
const getALLTurmas = async (limit, offset) => {
    const sql = `
        SELECT 
            turmas.id,
            turmas.nome,
            turmas.horario,
            cursos.nome AS curso
        FROM turmas
        JOIN cursos ON turmas.curso_id = cursos.id
        LIMIT $1 OFFSET $2
    `;

    const resultado = await pool.query(sql, [limit, offset]);
    return resultado.rows;
};

// Criar turma
const createTurma = async (nome, horario, curso_id) => {
    const sql = `
        INSERT INTO turmas (nome, horario, curso_id)
        VALUES ($1, $2, $3)
        RETURNING *
    `;

    const resultado = await pool.query(sql, [nome, horario, curso_id]);
    return resultado.rows;
};

// Atualizar turma
const updateTurma = async (id, nome, horario, curso_id) => {
    const sql = `
        UPDATE turmas
        SET nome = $1,
            horario = $2,
            curso_id = $3
        WHERE id = $4
        RETURNING *
    `;

    const resultado = await pool.query(
        sql,
        [nome, horario, curso_id, id]
    );

    return resultado.rows;
};

// Deletar turma
const deleteTurma = async (id) => {
    const sql = `
        DELETE FROM turmas
        WHERE id = $1
        RETURNING id
    `;

    const resultado = await pool.query(sql, [id]);
    return resultado.rows;
};

module.exports = {
    getALLTurmas,
    createTurma,
    updateTurma,
    deleteTurma
};