abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private cardNum: string) {
        super();
    }
    processar() {
        console.log(`Você está o processando o cartão: ${this.cardNum}`);
        console.log(`Cartão verificado: ${cartao(this.cardNum)}`)

    }
}

class PagamentoBoleto extends Pagamento{
    processar() {
        console.log(`Código do boleto: ${boleto()}`)
    }
}

function boleto(): string{
    return Array(48).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
}

function cartao(cardNum: string): string{

    if(cardNum.length == 4) {
        return "Cartão Validado"
    } else
        return "Número de digitos incorreto"
}

const bol = new PagamentoBoleto();
const card = new PagamentoCartao("2");
const card2 = new PagamentoCartao(`2341`)

card.processar()
bol.processar()
card2.processar()





