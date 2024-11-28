class Temperatura {
    private valor: number;

    constructor(valorTemp: number) {
        this.valor = valorTemp;
    }

    tempParaKelvin(kelvin: number = 273.15) {
        let valorAntigo = this.valor;
        this.valor += kelvin;
        return console.log(`O valor em Celsius de ${valorAntigo} em Kelvin é de ${this.valor}`);
    }

    tempParaFahrenheit(Fahrenheit: number = 32) {
        let valorAntigo = this.valor;
        this.valor = (this.valor * (9/5)) + Fahrenheit;
        return console.log(`O valor em Celsius de ${valorAntigo} em Fahrenheit é de ${this.valor}`);
    }
}

const temp1 = new Temperatura(24);
temp1.tempParaKelvin();

const temp2 = new Temperatura(18);
temp2.tempParaFahrenheit();
