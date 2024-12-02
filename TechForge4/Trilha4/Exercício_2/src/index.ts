interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {

    titulo: string
    conteudo: string

    public constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir() {
        console.log(`Titulo: ${this.titulo}, Conteúdo: ${this.conteudo}`);
    }
}

const livro1 =  new Texto('Nossa herança', 'Treinamento para lideres');
livro1.exibir();