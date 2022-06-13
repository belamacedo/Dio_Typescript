const pessoa = {
	nome: "Mariana",
	idade: 28,
	profissao: "desenvolvedora",
};

pessoa.idade = 25;

const andre: { nome: string; idade: number; profissao: string } = {
	nome: "Andre",
	idade: 25,
	profissao: "pintor",
};

const paula: { nome: string; idade: number; profissao: string } = {
	nome: "Paula",
	idade: 25,
	profissao: "Desenvolvedora",
};

enum Profissao {
	Professora,
	Atriz,
	Desenvolvedora,
	jogadoraDeFutebol,
}

interface Pessoa {
	nome: string;
	idade: number;
	profissao?: Profissao;
}

interface Estudante extends Pessoa {
	materias: string[];
}

const vanessa: Pessoa = {
	nome: "Vanessa",
	idade: 23,
	profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
	nome: "Maria",
	idade: 23,
	profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
	nome: "Jessica",
	idade: 24,
	profissao: Profissao.Desenvolvedora,
	materias: ["Matemática", "programação"],
};

const monica: Estudante = {
	nome: "Mônica",
	idade: 28,
	materias: ["Matemática", "programação"],
};

function listar(lista: string[]) {
	for (const item of lista) {
		console.log("- ", item);
	}
}

listar(monica.materias);
