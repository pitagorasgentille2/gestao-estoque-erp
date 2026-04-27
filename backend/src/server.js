const express = require('express');

const app = express();

app.use(express.json());
let products = [];
let idCounter = 1;

// LISTAR PRODUTOS
app.get('/products', (req, res) => {
    res.json(products);
});

// CRIAR PRODUTO
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    const product = {
        id: idCounter++,
        name,
        price
    };

    products.push(product);

    res.status(201).json(product);
});
// BUSCAR PRODUTO POR ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product);
});

app.get('/', (req, res) => {
    res.send('API do ERP funcionando 🚀');
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
