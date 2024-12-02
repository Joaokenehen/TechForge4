class Order {
    private cart: Cart;
    private pagamento: Pagamento;
    private shipin: Frete;

    constructor() {
        this.cart = new Cart();
        this.pagamento = new Pagamento();
        this.shipin = new Frete();
    }

    addItens(nome: string, preco: number, quantidade: number) {
        this.cart.addItens(nome, preco, quantidade);
    }

    processarPagamento() {
        const precoTotal = this.cart.getPrecoTotal();
        this.pagamento.processarPagamento(precoTotal);
    }

    atualizarStatus(status: string) {
        this.shipin.atualizarStatus(status);
    }

    detalhePedido(): object {
        return {
            itens: this.cart.getItens(),
            precoTotal: this.cart.getPrecoTotal(),
            paymentStatus: this.pagamento.getStatus(),
            shippingStatus: this.shipin.getStatus(),
        };
    }
}

class Cart {
    private itens: {nome: string, preco: number, quantidade: number}[] = [];

    addItens(nome: string, preco: number, quantidade: number) {
        this.itens.push({nome, preco, quantidade});
    }

    getPrecoTotal() {
        return  this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
    }

    getItens(): { nome: string, preco: number, quantidade: number }[] {
        return this.itens;
    }
}

class Pagamento {
    private paymentStatus: string = 'Em processamento';

    processarPagamento(precoTotal: number) {
        if (precoTotal > 0) {
            this.paymentStatus = 'Pago';
        } else {
            console.log('Não há itens para processar o pagamento');
        }
    }

    getStatus() {
        return this.paymentStatus;
    }
}

class Frete {
    private shippingStatus: string = 'Em processamento';

    atualizarStatus(status: string) {
        this.shippingStatus = status;
    }

    getStatus(): string {
        return this.shippingStatus
    }
}

const order1 = new Order();
order1.addItens('Melancia', 10, 2);
order1.addItens('Calzones', 15, 3);

order1.processarPagamento();
order1.atualizarStatus('Entregue');
console.log(order1.detalhePedido());
