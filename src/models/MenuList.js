class MenuList {
    constructor() {
        this.menu = [];
    }

    getAllmenu() {
        return this.menu;
    }

    addMenu(menu) {
        this.menu.push(menu);
    }
}

module.exports = MenuList;