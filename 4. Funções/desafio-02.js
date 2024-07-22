let nome = 'Max';
let experiencia = 4020;

let tier = selectTier(experiencia);

function selectTier(experiencia) {
  let selector;
  if (experiencia < 1000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Ferro")
  } else if (experiencia >= 1001 && experiencia <= 2000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Bronze")
  } else if (experiencia >= 2001 && experiencia <= 5000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Prata")
  } else if (experiencia >= 5001 && experiencia <= 7000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Ouro")
  } else if (experiencia >= 7001 && experiencia <= 8000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Platina")
  } else if (experiencia >= 8001 && experiencia <= 9000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Ascendente")
  } else if (experiencia >= 9001 && experiencia <= 10000) {
    selector = ("O Herói de nome " + nome + " está no nível de " + "Imortal")
  } else {
    selector = ("Radiante")
  }
  return selector;
}
console.log(tier)