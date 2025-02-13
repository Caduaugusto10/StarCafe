const express = require('express');
const cors = require('cors');
const coffeeRoutes = require('./src/routes/coffeeRoutes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/api', coffeeRoutes);

app.use('/', (req, res) => {
    res.send('Bem vindo a API de café!');
});

app.listen(PORT, () => {
    console.log(`⚡ Servidor on fire rodando na porta ⚡  ${PORT}`);
});
