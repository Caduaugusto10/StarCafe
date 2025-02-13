const  Order  =  require ( '../models/Order' );
const OrderList  =  require ( '../models/OrderList' );

const pedido = new OrderList();

pedido.addOrder(new Order({ nome: 'Luiz', produto: 'Café americano', preco: 5, status: 'Pendente' }));
pedido.addOrder(new Order({ nome: 'André', produto: 'Café com leite', preco: 7, status: 'Entregue' }));
pedido.addOrder(new Order({ nome: 'Ana', produto: 'Misto quente', preco: 10, status: 'Preparando' }));

const router = {
    addOrder: (req, res) => {
        try {
            const { nome, produto, preco, status } = req.body;
            pedido.addOrder(new Order({ nome, produto, preco, status }));
            return res.status(201).json({ message: 'Pedido adicionado com sucesso' });
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao adicionar pedido', error });
        }
    },

    getAllOrder: (req, res) => {
        try {
            const order = pedido.getAllOrder();
            return res.status(200).json(order);
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao encontrar pedido', error });
        }
    },

    getOrderById: (req, res) => {
        try {
            const { id } = req.params;
            const order = pedido.getOrderById(id);
            return res.status(200).json(order);
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao encontrar pedido', error });
        }
    },

    deleteOrder: (req, res) => {
        try {
            const { id } = req.params;
            pedido.deleteOrder(id);
            return res.status(200).json({ message: 'Pedido deletado com sucesso' });
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao deletar pedido', error });
        }
    }
}

module.exports = router;