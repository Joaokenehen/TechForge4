abstract class TaskManaker {

    protected tasks: Set<string>;

    constructor() {
        this.tasks = new Set();
    }

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class Project extends TaskManaker {
    private taskName: string;

    constructor(taskName: string) {
        super();
        this.taskName = taskName;
    }

    addTask(task: string) {
        const adTask = `Nome Projeto: ${this.taskName} - ${task}`;
        this.tasks.add(adTask);
    }
}

class DailyTaks extends TaskManaker {
    private data: string;

    constructor(data: string) {
        super();
        this.data = data;
    }

    addTask(task: string) {
        const adTask = `Tarefa do dia: ${this.data} - ${task}`;
        this.tasks.add(adTask);
    }
}

const project = new Project('Limpar Cadeiras');
project.addTask('Pegar Cadeiras');
project.addTask('Pegar Pano');
project.addTask('Limpar cadeiras');
project.addTask('Pegar Cadeiras')


const tasksDiarias = new DailyTaks("01/12/2024");
tasksDiarias.addTask('Fazer trilhas de programação');
tasksDiarias.addTask('Estudar para prova');
tasksDiarias.addTask('Entregar Trilhas');

console.log('Tasks para fazer: ', project.listTasks());
console.log('Tasks diárias: ', tasksDiarias.listTasks())