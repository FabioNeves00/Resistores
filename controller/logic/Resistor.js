class Resistor {
    #cores
    #max
    #min
    #calc
    #resistencia
    #lista_cores = ["Preto","Marrom","Vermelho","Laranja","Amarelo","Verde","Azul","Violeta","Cinza","Branco","Dourado", "Prateado"]
    constructor() {
        //clicker do bolsonaro
    }

    getResistencia() {
        return this.#resistencia;
    }

    setResistencia(value) {
        this.#resistencia = value;
    }

    setCores(cores) {
        this.#cores = cores;
    }

    getCores() {
        return this.#cores;
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

        for (let i = 0; i < 2; i++)
            resistor.push(this.#cores[Number(res[i])]);

        if (res[1] == res[2] && res.length - 1 < 10) {
            resistor.push(this.#cores[res.length - 1]);
        } else if (res[2] == res[3] && res.length - 2 < 10) {
            resistor.push(this.#cores[Number(res[2])]);
            resistor.push(this.#cores[res.length - 2]);
        }

        return {
            resistor,
            resto: 0
        };
    }

    getEquation() {
        switch (this.getCores().length) {
            case 3:
            case 4:
                return `${this.getCores()[0]}${this.getCores()[1]}*10^${this.getCores()[2]}`
            case 5:
                return `${this.getCores()[0]}${this.getCores()[1]}${this.getCores()[2]}*10^${this.getCores()[3]}`
        }
    }

    sumCores() {
        switch (this.getCores().length) {
            case 3:
                this.#calc = Number(this.getCores()[0] + this.getCores()[1]) * 10 ** Number(this.getCores()[2])
                return [this.#calc, this.#calc * 20 / 100, Number(this.getCores()[2])]
            case 4:
                this.#calc = Number(this.getCores()[0] + this.getCores()[1]) * 10 ** Number(this.getCores()[2])
                return [this.#calc, this.#calc * Number(this.getCores()[3]) / 100, Number(this.getCores()[2])]
            case 5:
                this.#calc = Number(this.getCores()[0] + this.getCores()[1] + this.getCores()[2]) * 10 ** Number(this.getCores()[3])
                return [this.#calc, this.#calc * Number(this.getCores()[4]) / 100, Number(this.getCores()[3])]
        }
    }

    getOhms(type) {
        switch (type) {
            case 'cor':
                this.#max = this.#format(this.sumCores()[0] + this.sumCores()[1], this.sumCores()[2])
                this.#min = this.#format(this.sumCores()[0] - this.sumCores()[1], this.sumCores()[2])
                return [this.#min.replace('.', ','), this.#max.replace('.', ',')]
        
            case 'valor':
                return this.#calcCores(this.#resistencia)
        }
    }

    #format(total, zeros) {
        switch (zeros) {
            case 0:
            case 1:
            case 2:
                return `${total} Ω`
            case 3:
            case 4:
            case 5:
                return `${total / 1000}K Ω`
            case 6:
            case 7:
            case 8:
                return `${total / 1000000}M Ω`
            case 9:
                return `${total / 1000000000}G Ω`

        }
    }
    #calcCores(value) {
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
          resto: input - this.#calcResistor(resistor)
      };
    }

    #calcResistor(array) {
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
