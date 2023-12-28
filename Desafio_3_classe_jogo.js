// Definindo a classe Heroi
class Heroi {
  // Construtor da classe com as propriedades nome, idade e tipo
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;

    // Escolhendo o ataque com base no tipo do herói
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou ataque genérico";
    }

    // Exibindo a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando uma instância da classe Heroi
const meuHeroi = new Heroi("Heroi1", 25, "mago");

// Chamando o método atacar da instância
meuHeroi.atacar();
