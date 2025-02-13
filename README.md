# StarCafe API

## Descrição
A API do StarCafe permite gerenciar o menu e os pedidos de um café.


## GET Buscar Pedido
http://localhost:4000/api/order

## GET Buscar Pedido por Id
http://localhost:4000/api/order/e6a99716-6a2d-4e50-8c6c-dcd9d43f3664

## POST Cadastrar Pedido
http://localhost:4000/api/order

BODY raw(json)
{
    "nome": "Leo",
    "produto": "Café simples",
    "preco": 3.5
}

## `#660000` DELETE Deletar Pedido
http://localhost:4000/api/order/0aafe186-4dc3-4ff4-972b-08db4cad61a6