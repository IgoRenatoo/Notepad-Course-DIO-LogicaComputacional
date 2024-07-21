// Estrutura com IF
let nome = 'MAX'
let experiencia = 1220;

if (experiencia < 1000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Ferro")
} else if (experiencia >= 1001 && experiencia <= 2000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Bronze")
} else if (experiencia >= 2001 && experiencia <= 5000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Prata")
} else if (experiencia >= 5001 && experiencia <= 7000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Ouro")
} else if (experiencia >= 7001 && experiencia <= 8000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Platina")
} else if (experiencia >= 8001 && experiencia <= 9000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Ascendente")
} else if (experiencia >= 9001 && experiencia <= 10000) {
  console.log("O Herói de nome " + nome + " está no nível de " + "Imortal")
} else {
  console.log("Radiante")
}

//Estrutura com Switch Case
nome = 'Igor'
experiencia = 1000;

switch (experiencia) {
  case 1000:
  case 2000:
    console.log("O Herói de nome " + nome + " está no nível de " + "Bronze");
    break;

  case 3000:
  case 4000:
  case 5000:
    console.log("O Herói de nome " + nome + " está no nível de " + "Prata");
    break;

  case 6000:
  case 7000:
    console.log("O Herói de nome " + nome + " está no nível de " + "Ouro");
    break;

  case 8000:
  case 9000:
    console.log("O Herói de nome " + nome + " está no nível de " + "Platina");
    break;

  case 10000:
    console.log("O Herói de nome " + nome + " está no nível de " + "Ascendente");
    break;

  default:
    console.log("O Herói de nome " + nome + " está no nível de " + "Crescimento");
    break;
}