interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    public constructor(idItem: number = 1, nomeItem: string = 'Pão de mel', precoItem: number = 16.99) {
        this.id = idItem;
        this.nome = nomeItem;
        this.preco = precoItem;
    }
}

const produto1 = new ItemLoja();
console.log(produto1.id);
console.log(produto1.nome);
console.log(produto1.preco);