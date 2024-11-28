class Vehiculo {

     mover() {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Vehiculo{

    mover() {
        console.log("O carro está dirigindo");
    }

}

class Bike extends Vehiculo {

    mover() {
        console.log("A bicicleta está pedalando")
    }
}

const bike = new Bike();
const carro = new Carro();
bike.mover();
carro.mover();