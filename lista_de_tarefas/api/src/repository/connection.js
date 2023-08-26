import mysql from 'mysql2/promise';

const conexao = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,  
    database: process.env.DATABASE
});

console.log('Banco de dados conectado!');
export {conexao};