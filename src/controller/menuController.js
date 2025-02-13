const Menu = require('../models/Menu');
const MenuList = require('../models/MenuList');

const lista = new MenuList();

lista.addMenu(new Menu(1, 'Café americano', 'Café', 5));
lista.addMenu(new Menu(2, 'Café com leite', 'Café', 7));
lista.addMenu(new Menu(3, 'Misto quente', 'Sanduíche', 10));
lista.addMenu(new Menu(4, 'Suco de fruta natural', 'Suco', 6));

const router = {
    getAllMenu: (req, res) => {
        try {
            const menu = lista.getAllmenu();
            return res.status(200).json(menu);
        } catch (error) {
            return res.status(400).json({ message: "Erro ao encontrar pedido", error });
        }
    }
}

module.exports = router;