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

app.get('/', (req, res) => {
    res.send('API do ERP funcionando 🚀');
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
