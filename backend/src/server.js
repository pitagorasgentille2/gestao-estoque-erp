const express = require('express');
const db = require('./database');

const app = express();

app.use(express.json());

// ROTA INICIAL
app.get('/', (req, res) => {
    res.send('API do ERP funcionando 🚀');
});

// LISTAR PRODUTOS
app.get('/products', (req, res) => {
    db.all('SELECT * FROM products', [], (error, rows) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao listar produtos' });
        }

        res.json(rows);
    });
});

// CRIAR PRODUTO
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    db.run(
        'INSERT INTO products (name, price) VALUES (?, ?)',
        [name, price],
        function (error) {
            if (error) {
                return res.status(500).json({ message: 'Erro ao criar produto' });
            }

            res.status(201).json({
                id: this.lastID,
                name,
                price
            });
        }
    );
});

// BUSCAR PRODUTO POR ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    db.get('SELECT * FROM products WHERE id = ?', [id], (error, row) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao buscar produto' });
        }

        if (!row) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.json(row);
    });
});

// ATUALIZAR PRODUTO
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    db.run(
        'UPDATE products SET name = ?, price = ? WHERE id = ?',
        [name, price, id],
        function (error) {
            if (error) {
                return res.status(500).json({ message: 'Erro ao atualizar produto' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            res.json({
                id,
                name,
                price
            });
        }
    );
});
// DELETAR PRODUTO
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    db.run(
        'DELETE FROM products WHERE id = ?',
        [id],
        function (error) {
            if (error) {
                return res.status(500).json({ message: 'Erro ao deletar produto' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            res.json({ message: 'Produto deletado com sucesso' });
        }
    );
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});