abstract class FavoriteManager {
    protected favorite: string[];

    constructor() {
        this.favorite = [];
    }

    abstract addFavorite(item: string): void;

    getFavorite(): string[] {
        return this.favorite;
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string) {
        if(!this.favorite.includes(item)) {
            this.favorite.push(item);
            this.favorite.sort((a, b) => a.localeCompare(b));
        }
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {

        if(!this.favorite.includes(item)) {
            this.favorite.unshift(item);
        }
    }
}

const  filmesFavoritos = new MoviesFavoriteManager();
filmesFavoritos.addFavorite('Mad Max');
filmesFavoritos.addFavorite('Avatar');
filmesFavoritos.addFavorite('2012');
filmesFavoritos.addFavorite('Mad Max');

console.log('Filmes por ordem: ', filmesFavoritos);

const livroFavorito = new BooksFavoriteManager();
livroFavorito.addFavorite('Senhor dos aneis');
livroFavorito.addFavorite('Os 3 mosqueteiros');
livroFavorito.addFavorite('Senhor dos aneis');
livroFavorito.addFavorite('Bíblia sagrada');
console.log("Livros favoritos são: ", livroFavorito.getFavorite());