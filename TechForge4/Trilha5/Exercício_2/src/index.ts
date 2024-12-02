abstract class Inventory {
    protected inventory: Record<string, number>;

    constructor() {
        this.inventory = {};
    }

    abstract addItem(item: string, quantity: number): void;

    abstract removeItem(item: string): void;

    getIventory(): Record<string, number> {
        return this.inventory;
    }
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number) {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string) {
        if (this.inventory[item]) {
            delete this.inventory[item];
        } else {
            console.log(`Não foi possível encontrar o item ${item} na Warehouse`)
        }
    }
}

class StoreInventory extends Inventory {
    private maxPorItem: number;

    constructor(maxPorItem: number = 10) {
        super();
        this.maxPorItem = maxPorItem;
    }

    addItem(item: string, quantity: number) {
        if(quantity > this.maxPorItem) {
            console.log(`Operação execede o limite de itens de tamanho ${this.maxPorItem}`);
            return;
        }

        if (this.inventory[item]) {
            const novaQantidade = this.inventory[item] + quantity;
            if (novaQantidade > this.maxPorItem) {
                console.log(`Operação exede o limite de ${this.maxPorItem} items, apenas ${this.maxPorItem - this.inventory[item]} podem ser adicionados`);
                this.inventory[item] = this.maxPorItem;
            } else {
                this.inventory[item] = novaQantidade;
            }
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string) {
        if(this.inventory[item]) {
            delete this.inventory[item];
        } else {
            console.log(`Item ${item} não encontrado`);
        }
    }
}

const armazem = new WarehouseInventory();
armazem.addItem('Bolachas água e sal', 200);
armazem.addItem('Furadeiras', 50);
armazem.addItem('Batatas', 300);
armazem.addItem('Furadeiras', 30);
armazem.removeItem('Bolachas água e sal');
console.log('Estoque no armazém: ', armazem.getIventory());

const loja = new StoreInventory();
loja.addItem('Colcci Camisas', 8);
loja.addItem('Tenis Nike', 5);
loja.addItem('Óculos', 11);
loja.addItem('Colcci Camisas', 3);
loja.addItem('Luvas Boxe', 4);
loja.removeItem('Luvas Boxe');
console.log('Itens na loja: ', loja.getIventory());