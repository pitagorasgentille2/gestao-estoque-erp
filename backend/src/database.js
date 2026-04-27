const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/stockwise.db', (error) => {
    if (error) {
        console.error('Erro ao conectar ao banco:', error.message);
    } else {
        console.log('Banco SQLite conectado com sucesso');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL
        )
    `);
});

module.exports = db;