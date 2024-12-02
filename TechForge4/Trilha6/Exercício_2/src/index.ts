class UserManager {
    private criarUsuario: CriarUsuario;

    constructor() {
        this.criarUsuario = new CriarUsuario();
    }

    criarUsuarioComEmail(nome: string, emails: string) {
        this.criarUsuario.criarUsuarioComEmail(nome, emails);
    }


    getEmails():object {
        return {
            emails: this.criarUsuario.getItens()
        }
    }
}

class CriarUsuario {
    private usuarios: {nome: string, emails: string}[] = [];

    criarUsuarioComEmail(nome: string, emails: string) {
        this.usuarios.push({nome, emails});
    }

    getItens(): {nome: string, emails: string}[] {
        return this.usuarios;
    }
}

const usuario1 = new UserManager();

usuario1.criarUsuarioComEmail('Jorge', 'Olá, sou o jorge, preciso conversar com você amanhã');
usuario1.criarUsuarioComEmail('Mateus', 'Quero me candidatar para essa vaga');
console.log('Os emails e usuarios são', usuario1.getEmails());