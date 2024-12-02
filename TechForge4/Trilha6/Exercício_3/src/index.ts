class EmailSender {
    private validar: ContactValidator;

    constructor() {
        this.validar = new ContactValidator();
    }

    enviarEmail(email: string, assunto: string, mensagem: string): void {
        if(!this.validar.validarEmail(email)) {
            console.log('Não foi possível validar o email, algo incorreto');
            return;
        }
        console.log(`A mensagem de assunto ${assunto} foi enviada para ${email} com sucesso!`);
        console.log(`Conteudo da mensagem: ${mensagem}`);
    }

}

class ContactValidator {

    validarEmail(email: string): boolean {
        const emailRegra =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegra.test(email);
    }
}

const enviarEmail1 = new EmailSender();
enviarEmail1.enviarEmail('joao_quennehen@outlook.com', 'Conta de luz', 'Pague a conta de luz!');
console.log('Email enviado foi: ', enviarEmail1)

const enviarEmail2 = new EmailSender();
enviarEmail2.enviarEmail('Joge', 'Trabalho', 'Venha trabalhar!');
console.log('Email status: ', enviarEmail2);