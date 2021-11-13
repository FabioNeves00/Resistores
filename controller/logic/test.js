class Resistor {
  #lista_cores = [
    "Preto", "Marrom", "Vermelho",
    "Laranja", "Amarelo", "Verde",
    "Azul", "Violeta", "Cinza",
    "Branco", "Dourado", "Prateado"];

    calcCores(value) {
      const res = String(value).split('');
      for (let i in res) {
        if (/[^0-9]/.test(res[i])) {
            res.pop(i);
            i--;
        }
      }
      const resistor = [];

      for (let i = 0; i < 2; i++)
          resistor.push(this.#lista_cores[Number(res[i])]);

      if (res.length < 3)  {
          resistor.push(this.#lista_cores[0]);
          if (res.length < 2) { 
              resistor[1] = this.#lista_cores[0];
              resistor[2] = this.#lista_cores[10];
          }
      } else if (res.length <= 12) {
          if (res[2] != 0 || (res[2] == 0 && res.length == 12)) {
            resistor.push(this.#lista_cores[Number(res[2])]);
            resistor.push(this.#lista_cores[res.length - 3]);
          } else {
            resistor.push(this.#lista_cores[res.length - 2]);
          }
      } else {
        while (resistor.length) resistor.pop();

        resistor.push('Inválido');
      }

      const input = Number(res.join(''))

      return {
          input,
          resistor,
          resto: input - this.calcResistor(resistor)
      };
    }

    calcResistor(array) {
      const res = [];
  
      if (array.length == 3) {
        if (array.indexOf('Dourado')) {
          for (let i = 0;i < 2;i++) res.push(this.#lista_cores.indexOf(array[i]));
  
          for (let i = 0;i < this.#lista_cores.indexOf(array[2]);i++) res.push(0);
        } else {
          return this.#lista_cores.indexOf(array[0]);
        }
      } else {
        for (let i = 0;i < 3;i++) res.push(this.#lista_cores.indexOf(array[i]));
  
        for (let i = 0;i < this.#lista_cores.indexOf(array[3]);i++) res.push(0);
      }
  
      return Number(res.join(''));
    }
}

const resistor = new Resistor();

console.log(resistor.calcCores(123123123));