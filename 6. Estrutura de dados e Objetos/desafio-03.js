class heroi {
  constructor(tipo, nome, idade) {
    this.tipo = tipo;
    this.nome = nome;
    this.idade = idade;
  }

  atacar() {
    let ataque;
    if (this.tipo == 'Guerreiro') {
      ataque = 'sua espada';
    } else if (this.tipo == 'Mago') {
      ataque = 'sua magia';
    } else if (this.tipo == 'Monge') {
      ataque = 'sua artes marciais';
    } else if (this.tipo == 'Ninja') {
      ataque = 'sua shuriken';
    } else {
      ataque = 'sua delicadeza';
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
  }
}

let person = new heroi('Monge', 'igor', '32');
person.atacar();