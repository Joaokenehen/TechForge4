interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];

    addLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new  Biblioteca();

biblioteca.addLivro({titulo: 'A bela e a fera', autor: 'Gabrielly Suzane', disponivel: false});
biblioteca.addLivro({titulo: 'Os 3 mosqueteiros', autor: 'Alexandre Dumas', disponivel: true});
biblioteca.addLivro({titulo: 'Haliday vol 8', autor: 'Haliday', disponivel: false});
biblioteca.addLivro({titulo: 'Biblia sagrada', autor: 'Inspired by God', disponivel: true});

const livrosDisp = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:", livrosDisp);


