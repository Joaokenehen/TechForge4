abstract class Funcionario {
    protected nome: string;
    protected salario: number;

    public constructor(nome:string, salario:number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): void;
}

class Operario extends Funcionario {
    calcularBonus() {
        console.log(`O operário com nome: ${this.nome} tem um salario + bonus de ` +calcularBonusComSalario(this.salario, 5));
    }
}

class Gerente extends Funcionario {
    calcularBonus() {
        console.log(`O gerente com nome de: ${this.nome} tem um salário + bonus de ` +calcularBonusComSalario(this.salario, 10));
    }
}

function calcularBonusComSalario(salario:number, bonus:number){
    bonus = (bonus / 100) * salario;
    return salario += bonus;
}

const operario = new Operario('Carlos', 1500);
operario.calcularBonus();

const gerente = new Gerente('Portela', 5600);
gerente.calcularBonus();