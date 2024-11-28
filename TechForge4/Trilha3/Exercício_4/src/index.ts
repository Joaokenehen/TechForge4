class Animal {
    protected energia: number;
    protected animal: string;

    public constructor(energy: number = 0, animal: string = 'animal') {
        this.energia = energy;
        this.animal = animal;
    }
    comer() {
        console.log('O animal se alimentou...')
        return  this.energia += 10;
    }

    statusEnergia() {
        console.log(`O ${this.animal} tem atualmente ${this.energia} de energia`);
    }
}

class Leao extends Animal {

    public constructor(energia: number = 0, animal: string = "leão") {
        super(energia, animal);
    }
    comer(): number {
        console.log('O leão caçou');
        this.energia -= 5;
        console.log('O leão se alimentou');
        this.energia += 10;
        return this.energia
    }

    statusEnergia() {
        super.statusEnergia();
    }
}

class Passaro extends Animal {

    public constructor(energia: number = 0, animal: string = "pássaro") {
        super(energia, animal);
    }

    comer(): number {
        console.log('O pássro se alimentou');
        this.energia += 10;

        return this.energia;
    }

    statusEnergia() {
        super.statusEnergia();
    }
}

const animal = new Animal();
animal.comer();
animal.statusEnergia();

const leao = new Leao();
leao.comer();
leao.statusEnergia();

const passaro = new Passaro();
passaro.comer();
passaro.statusEnergia();

