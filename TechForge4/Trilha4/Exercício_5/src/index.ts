interface LivrosBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivrosBiblioteca[] = [{titulo: 'O gato de botas', autor: 'DreamWorks', genero: 'Fantasia', disponivel: false},
                                          {titulo: 'Sherk', autor: 'Dreamworks', genero: 'Fantasia', disponivel: true},
                                          {titulo: 'Senhor dos aneis', autor: 'J.R.R Tolkien', genero: 'Fantasia', disponivel: false},
                                          {titulo: 'Senhow dos aneis: O hobbit', autor: 'J.R.R Tolkien', genero: 'Fantasia', disponivel: true},
                                          {titulo: 'Haliday vol 1', autor: 'Haliday', genero: 'Física', disponivel: true},
                                          {titulo: 'Haliday vol 5', autor: 'Haliday', genero: 'Física', disponivel: false}];

    filtrarPorGenero(genero: string): LivrosBiblioteca[] {
        return this.livros.filter(livrosBiblioteca => livrosBiblioteca.genero.toLowerCase() === genero.toLowerCase());

    }

    buscarPorAutor(autor: string): LivrosBiblioteca[]{
        return this.livros.filter(livrosBiblioteca => livrosBiblioteca.autor.toLowerCase() === autor.toLowerCase());
    }

    buscarLivrosDisponiveis(): LivrosBiblioteca[] {
        return this.livros.filter(livros => livros.disponivel);
    }

    obterLivrosDisponiveisOrdenados(): LivrosBiblioteca[] {
        return this.buscarLivrosDisponiveis().sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const biblioteca = new BibliotecaGestao();

const livrosOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();
console.log('Livros dispiníveis em ordem alfabetica: ', livrosOrdenados);

const livrosPorAutor = biblioteca.buscarPorAutor('DreamWorks');
console.log('Livros da DreamWorks: ', livrosPorAutor);

const livrosFisica = biblioteca.filtrarPorGenero('Física');
console.log('Livros de física: ', livrosFisica);
