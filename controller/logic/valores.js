class CalcResistor {
  #resistencia;
  #tolerancia;
  #cores = [
    "Preto", "Marrom", "Vermelho", 
    "Laranja", "Amarelo", "Verde", 
    "Azul", "Violeta", "Cinza",
    "Branco", "Dourado", "Prateado"];

  constructor() {
    
  }

  calcCores(resistencia) { // Entrada aceita String e Numbers
    const res = String(resistencia).split('');

    for (let i = 0;i < res.length;i++) {
      if (/[^0-9]/.test(res[i])) { // Remove todos os caracteres não numéricos
        res.pop(i);
        i--;
      }
    }
    const resistor = [];
    
    for (let i = 0;i < 2;i++) 
      resistor.push(this.#cores[Number(res[i])]);

    if (res[1] == res[2] && res.length - 1 < 10) {
      resistor.push(this.#cores[res.length - 1]);
    } else if (res[2] == res[3] && res.length - 2 < 10) {
      resistor.push(this.#cores[Number(res[2])]);
      resistor.push(this.#cores[res.length - 2]);
    } else {
      if (3 < res.length) resistor.push(this.#cores[Number(res[res.length - 2])]);
    }

    return {
      resistor,
      resto: 0
    };
  }

  calcResistor() {

  }

  calcResto(array, value) {
    
  }

  getResistencia() {
    return this.#resistencia;
  }

  getTolerancia() {
    return this.#tolerancia;
  }
  
  setResistencia(value) {
    this.#resistencia = value;
  }

  setTolerancia(value) {
    this.#tolerancia = value;
  }
}

const resistor = new CalcResistor();

for (let i = 1;i < 1000;i++) console.log(i, resistor.calcCores(i)); 
// Input aqui pra testar