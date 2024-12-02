interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja [] = [];

    addProdutos(produto: ProdutoLoja) {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }

}

const loja = new Loja();

loja.addProdutos({codigo: 1, nome: 'Mouse'});
loja.addProdutos({codigo: 2, nome: 'Kit Livro'});
loja.addProdutos({codigo: 3, nome: 'Bike'});

const item1 = loja.buscarProdutoPorCodigo(1);
console.log(item1 ? `Produto: ${item1.nome}` : `Não encontrado`);
const item2 = loja.buscarProdutoPorCodigo(2);
console.log(item2 ? `Produto: ${item2.nome}` : `Não encontrado`);
const item4 = loja.buscarProdutoPorCodigo(4);
console.log(item4 ? `Produto: ${item4.nome}` : `Não encontrado`);

