const { v4: uuidv4 } = require('uuid');

class Order {
  constructor({ nome, produto, preco, status = 'Pendente' }) {
    this.id = uuidv4();
    this.nome = nome;
    this.produto = produto;
    this.preco = preco;
    this.status = status;
  }
}

module.exports = Order;