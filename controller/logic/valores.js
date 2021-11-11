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

    for (let i in res) {
      if (/[^0-9]/.test(res[i])) { // Remove todos os caracteres não numéricos
        res.pop(i);
        i--;
      }
    }
    const resistor = [];
    
    for (let i = 0;i < 2;i++) 
      resistor.push(this.#cores[Number(res[i])]);

    let aux = [];

    
    if (res.length < 3)  { // 10 OK
      resistor.push(this.#cores[0]);
      if (res.length < 2) { // 1 OK
        resistor[1] = this.#cores[0];
        resistor[2] = this.#cores[10];
      }
    } else if (res.length < 4 && res[1] == res[2]) { // 100 OK 1000 OK
      for (let i = 2;i < res.length;i++) { 
        aux.push(res[i]);
      }
      aux = aux.sort((a, b) => a - b);
      if (res[1] > aux[0]) resistor[1] = this.#cores[aux[0]];
      resistor.push(this.#cores[0 < res.length - 1 ? res.length - 2 : 0]);
    } else if (res.length < 4 && res[1] != res[2]) {
      resistor.push(this.#cores[res[2]]);
      resistor.push(this.#cores[0]);
    } else if (res.length < 12) {
      if (res[1] != res[2]) {
        resistor.push(this.#cores[res[2]]);
        for (let i = 3;i < res.length;i++) { 
          aux.push(res[i]);
        }
        aux = aux.sort((a, b) => a - b);

        if (res[2] > aux[0]) {
          resistor[2] = this.#cores[aux[0]];
          resistor.push(this.#cores[0 < res.length - 2 ? res.length - 3 : 0]);
          if (resistor[1] == resistor[2] && res.length < 12) {
            resistor.splice(2, 1);
            resistor[2] = this.#cores[this.#cores.indexOf(resistor[2]) + 1];
          }
         
        } else {
          resistor.push(this.#cores[0 < res.length - 2 ? res.length - 3 : 0]);
        }
      } else {
        if (res.length < 12) {
          for (let i = 3;i < res.length;i++) { 
            aux.push(res[i]);
          }
          aux = aux.sort((a, b) => a - b);
          if (res[2] > aux[0]) {
            resistor[2] = this.#cores[aux[0]];
            resistor.push(this.#cores[0 < res.length - 2 ? res.length - 3 : 0]);
            if (resistor[1] == resistor[2] && res.length < 12) {
              resistor.splice(2, 1);
              resistor[2] = this.#cores[this.#cores.indexOf(resistor[2]) + 1];
            }
          } else {
            resistor.push(this.#cores[0 < res.length - 1 ? res.length - 2 : 0]);
          }  
        }
      }
    }


    return {
      res: res.join(''),
      resistor,
      resto: Number(res.join('')) - this.calcResistor(resistor)
    };
  }

  calcResistor(array) {
    const res = [];

    if (array.length == 3) {
      if (array.indexOf('Dourado')) {
        for (let i = 0;i < 2;i++) res.push(this.#cores.indexOf(array[i]));

        for (let i = 0;i < this.#cores.indexOf(array[2]);i++) res.push(res[1]);
      } else {
        return this.#cores.indexOf(array[0]);
      }
    } else {
      for (let i = 0;i < 3;i++) res.push(this.#cores.indexOf(array[i]));

      for (let i = 0;i < this.#cores.indexOf(array[3]);i++) res.push(res[2]);
    }

    return Number(res.join(''));
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

for (let i = 2000000;i < 999999999999;i++) {
  if (!(resistor.calcCores(i).resto < 1000000 && resistor.calcCores(i).resto >= 0)) {
    console.log(resistor.calcCores(i));
    break;
  } else {
    console.log('OK', i, resistor.calcCores(i));
  }
}
 
// Input aqui pra testar