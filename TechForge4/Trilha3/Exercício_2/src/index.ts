class FiguraGeometrica {

    calcularArea(raio:number, x:number, y:number) {
    }

}

class Circulo extends FiguraGeometrica {

    calcularArea(raio: number) {
        let area = Math.PI * Math.pow(raio, 2);
        return console.log(area);
    }

}

class Quadrado extends FiguraGeometrica {

    calcularArea(x:number, y:number) {
        let area = x * y;
        return console.log(area);
    }
}

class Triangulo extends FiguraGeometrica {

    calcularArea(x:number, y:number) {
        let area = (x * y) / 2;
        return console.log(area);
    }
}

class Outros extends FiguraGeometrica {

    private lados: number;

    constructor(lados: number) {
        super();
        this.lados = lados;
    }

    calcularArea(x:number, y:number) {
        let area
        switch (this.lados) {
            case 3: {
                area = (x * y) / 2;
                return console.log(`A área do triangulo é ${area}`); break;
            }
            case 4: {
                area = x * y;
                return console.log(`A área do quadrado é ${area}`);
                break;
            }
            case 5: {
                area = (5 * x) * y;
                return console.log(`A área do pentagono é ${area}`);
                break;
            }
            default: {
                console.log(`Não é possível calcular essa figura pois não condiz com o numero de lados disponíveis`);
                break;
            }

        }

    }
}

const circulo = new Circulo();
const quadrado = new Quadrado();
const triangulo = new Triangulo();
circulo.calcularArea(2);
quadrado.calcularArea(2, 4);
triangulo.calcularArea(4, 6);

const outros1 = new Outros(3);
outros1.calcularArea(3, 4);

const outros2 = new Outros(5);
outros2.calcularArea(4, 8);

const outros3 = new Outros(1);
outros3.calcularArea(2, 7);