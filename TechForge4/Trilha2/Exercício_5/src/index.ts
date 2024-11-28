class Agenda {
    private compromissos: string[];

    public constructor(compAgenda: string[]) {
        this.compromissos = compAgenda;
    }

    addComp(comp: string) {
        this.compromissos.push(comp);
    }

    listComp() {
        console.log(`Os compromissos listados na agenda são `);
        this.compromissos.forEach((compromissos) => {
            console.log(compromissos);
        });
    }
}

const agenda = new Agenda([]);
agenda.addComp("Limpar Cadeiras");
agenda.addComp("Arrumar Mesas");
agenda.addComp("Programar");
agenda.listComp()
