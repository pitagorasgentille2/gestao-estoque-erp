const express = require('express');
const db = require('./database');

const app = express();

app.use(express.json());

function validateProduct(data) {
    const { name, description, price, quantity, minimum_stock } = data;

    if (!name || name.trim().length < 3 || name.length > 80) {
        return 'Nome deve ter entre 3 e 80 caracteres';
    }

    if (description && description.length > 255) {
        return 'Descrição deve ter no máximo 255 caracteres';
    }

    if (typeof price !== 'number' || price <= 0) {
        return 'Preço deve ser um número maior que zero';
    }

    const priceString = price.toString();
    if (priceString.includes('.') && priceString.split('.')[1].length > 2) {
        return 'Preço deve ter no máximo 2 casas decimais';
    }

    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 99999) {
        return 'Quantidade deve ser um inteiro entre 0 e 99999';
    }

    if (!Number.isInteger(minimum_stock) || minimum_stock < 0 || minimum_stock > 99999) {
        return 'Estoque mínimo deve ser um inteiro entre 0 e 99999';
    }

    return null;
}

function validateStockQuantity(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
        return 'Quantidade inválida';
    }

    return null;
}

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
    const { name, description, price, quantity, minimum_stock } = req.body;

    const validationError = validateProduct(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    db.run(
        'INSERT INTO products (name, description, price, quantity, minimum_stock) VALUES (?, ?, ?, ?, ?)',
        [name, description || null, price, quantity, minimum_stock],
        function (error) {
            if (error) {
                return res.status(500).json({ message: 'Erro ao criar produto' });
            }

            res.status(201).json({
                id: this.lastID,
                name,
                description: description || null,
                price,
                quantity,
                minimum_stock
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
    const { name, description, price, quantity, minimum_stock } = req.body;

    const validationError = validateProduct(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    db.run(
        'UPDATE products SET name = ?, description = ?, price = ?, quantity = ?, minimum_stock = ? WHERE id = ?',
        [name, description || null, price, quantity, minimum_stock, id],
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
                description: description || null,
                price,
                quantity,
                minimum_stock
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

// ENTRADA DE ESTOQUE
app.post('/stock/in/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;

    const validationError = validateStockQuantity(quantity);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    db.run(
        'UPDATE products SET quantity = quantity + ? WHERE id = ?',
        [quantity, id],
        function (error) {
            if (error) {
                return res.status(500).json({ message: 'Erro ao registrar entrada de estoque' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            res.json({ message: 'Entrada de estoque registrada com sucesso' });
        }
    );
});

// SAÍDA DE ESTOQUE
app.post('/stock/out/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;

    const validationError = validateStockQuantity(quantity);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    db.get('SELECT * FROM products WHERE id = ?', [id], (error, product) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao buscar produto' });
        }

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        if (product.quantity < quantity) {
            return res.status(400).json({ message: 'Estoque insuficiente' });
        }

        db.run(
            'UPDATE products SET quantity = quantity - ? WHERE id = ?',
            [quantity, id],
            function (error) {
                if (error) {
                    return res.status(500).json({ message: 'Erro ao registrar saída de estoque' });
                }

                res.json({ message: 'Saída de estoque registrada com sucesso' });
            }
        );
    });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});