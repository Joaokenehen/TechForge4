
class ContaBancaria {
    private titular: string;
    private saldo: number;

    public constructor(titularPessoa: string, saldoPessoa: number) {
        this.titular = titularPessoa;
        this.saldo = saldoPessoa;
    }

    contaApresentar () {
        console.log(`A conta de nome ${this.titular} está com um saldo de R$${this.saldo}`);
    }

    sacar (saque: number) {
        this.saldo -= saque;
        return console.log(`A conta ${this.titular} está com um saldo atual de R$${this.saldo} após o saque`);
    }

    depositar (deposito: number) {
        this.saldo += deposito;
        return console.log(`A conta ${this.titular} está com um saldo atual de R$${this.saldo} após o deposito`);
    }
}

const conta = new ContaBancaria("Joãozinho", 1443);
conta.contaApresentar();
conta.depositar(1200);
conta.sacar(100);
