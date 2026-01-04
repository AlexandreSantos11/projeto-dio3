class heroi {
    constructor(nome, idade, tipo = 'Humano normal') {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    };

    tipoAtaque() {
        const ataques = {
            MAGO: 'magia',
            GUERREIRO: 'espada',
            MONGE: 'artes marciais',
            NINJA: 'shuriken'
        };

        return ataques[this.tipo.toUpperCase()] ?? 'ataque desconhecido'
    };

    atacar() {
        const ataque = this.tipoAtaque();
        return `O ${this.tipo} atacou usando ${ataque}`;
    };

    apresentar() {
        return `Meu nome é ${this.nome} e sou do tipo ${this.tipo}`;
    };
};

const heroiMago = new heroi('Deglomis', 28, 'Guerreiro');

console.log(heroiMago.apresentar());
console.log(heroiMago.atacar());

