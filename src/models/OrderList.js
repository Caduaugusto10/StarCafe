class OrderList {
    constructor() {
        this.order = [];
    }

    addOrder(order) {
        this.order.push(order);
    }

    getAllOrder() {
        return this.order;
    }

    getOrderById(id) {
        return this.order.find(order => order.id === id);
        if(!order) {
            throw new Error('Não foi possível encontrar o pedido');
        }
        return order;
    }

    deleteOrder(orderId) {
        this.order = this.order.filter(order => order.id != orderId);
    }
}

module.exports = OrderList;