class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;

    public constructor(tituloLivro: string, autorLivro: string, paginasLivro: number) {
        this.titulo = tituloLivro;
        this.autor = autorLivro;
        this.paginas = paginasLivro;

    }

    lidoLivro (lido: boolean) {
        if (lido == true)
            console.log(`O livro de titulo ${this.titulo}, autor ${this.autor} e de páginas com número de ${this.paginas} foi lido`)
         else
            console.log(`O livro de titulo ${this.titulo}, autor ${this.autor} e de páginas com número de ${this.paginas} não foi lido`)

    }
}

const livro = new Livro("Harry Potter", "JK", 300);
livro.lidoLivro(true);
livro.lidoLivro(false);
