abstract class VoteSystem {
    protected vote: Record<string, number>

    constructor() {
        this.vote = {}
    }

    abstract voteFor(candidate: string): void;

    abstract getResult(): object;
}

class Election extends VoteSystem {

    voteFor(candidate: string) {
        if(this.vote[candidate]) {
            this.vote[candidate]++;
        } else {
            this.vote[candidate] = 1;
        }
    }

    getResult(): Record<string, number> {
        return this.vote;
    }
}

class Poll extends VoteSystem {

    voteFor(candidate: string) {
        if(this.vote[candidate]) {
            this.vote[candidate]++;
        } else {
            this.vote[candidate] = 1;
        }
    }

    getResult(): { candidate: string, votes: number }[] {

        // @ts-ignore
        return Object.entries(this.vote)
            .map(([candidate, votes]) => ({candidate, votes}))
            .sort((a, b) => b.votes - a.votes);
    }
}

const eleicao = new Election();
eleicao.voteFor('Trump');
eleicao.voteFor('Trump');
eleicao.voteFor('Biden');
eleicao.voteFor('Bolsonaro');
eleicao.voteFor('Trump');
console.log('Apuração dos votos mostra que: ', eleicao);

const votos = new Poll();
votos.voteFor('Putin');
votos.voteFor('Putin');
votos.voteFor('Putin');
votos.voteFor('Maduro');
votos.voteFor('Shin jim ping');
console.log('Resultado da pesquisa nas ruas', votos.getResult());
