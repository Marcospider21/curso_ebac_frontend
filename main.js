function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.emitirSom = function() {
        console.log("Som de animal genérico");
    };
}

function Cachorro(nome, idade, raca) {
    this.raca = raca;

    Animal.call(this, nome, idade);

    this.emitirSom = function() {
        console.log("Latido: Au Au");
    };
}

function Gato(nome, idade, raca) {
    this.raca = raca;

    Animal.call(this, nome, idade);

    this.emitirSom = function() {
        console.log("Miado: Miau Miau");
    };
}

const rex = new Cachorro('Rex', 3, 'bulldog' );
const dori = new Gato('Dori', 1, 'siamês' );
const alladin = new Gato('Alladin', 2, 'persa' );

console.log(rex);
rex.emitirSom();

console.log(dori);
dori.emitirSom();

console.log(alladin);
alladin.emitirSom();