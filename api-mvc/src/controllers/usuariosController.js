const express = require('express');
const router = express.Router();

const { getConnection, sql } = require("Z:/web2/API-CRUD/api-mvc/db");

exports.getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Usuarios");

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.getUserId = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT id FROM Usuarios");

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.postUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const{nome, email} = req.body
    
    const result = await pool.request()
        .input("nome", sql.VarChar, nome)
        .input("email", sql.VarChar, email)
        .query(`
          INSERT INTO Usuarios (nome, email)
          VALUES (@nome, @email)
        `);

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.putUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const{id, nome, email} = req.body
    
    const result = await pool.request()
        .input("nome", sql.VarChar, nome)
        .input("email", sql.VarChar, email)
        .input("id", sql.Int, id)
        .query(`
          UPDATE Usuarios 
          SET nome = @nome, email = @email
          WHERE id = @id
        `);

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.deleteUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const{id, nome, email} = req.body
    
    const result = await pool.request()
        .input("nome", sql.VarChar, nome)
        .input("email", sql.VarChar, email)
        .input("id", sql.Int, id)
        .query(`
          DELETE FROM Usuarios 
          WHERE id = @id AND nome = @nome AND email = @email
        `);

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};