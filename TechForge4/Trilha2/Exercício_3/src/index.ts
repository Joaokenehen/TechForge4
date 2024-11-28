class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    public constructor(nomeProd: string, precoProd: number, quantProd: number) {
        this.nome = nomeProd;
        this.preco = precoProd;
        this.quantidade = quantProd;
    }

    valorTotal () {
        let total = this.preco * this.quantidade;
        return console.log(`O valor total em estoque dos itens de tipo ${this.nome} é de R$${total}`);
    }
}

const produto = new Produto("Sardinhas", 5, 60);
produto.valorTotal();