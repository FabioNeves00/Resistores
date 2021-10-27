class Resistor {
    #cores
    #valor
    #max
    #min
    #calc
    constructor() {
    
    }

    setCores(cores) {
        this.#cores = cores;
    }

    setValor(valor) {
        this.#valor = valor;
    }

    getCores() {
        return this.#cores;
    }

    getValor() {
        return this.#valor;
    }

    getEquation() {
        switch (this.getCores().length) {
            case 3:
                case 4:
                    return `${this.getCores()[0]}${this.getCores()[1]}*10^${this.getCores()[2]}`
            case 5:
                return `${this.getCores()[0]}${this.getCores()[1]}${this.getCores()[2]}*10^${this.getCores()[2]}`
        }
    }

    sumCores() {
        switch (this.getCores().length) {
            case 3:
                this.#calc = Number(this.getCores()[0] + this.getCores()[1]) * 10**Number(this.getCores()[2])
                return [this.#calc, this.#calc * 20/100, Number(this.getCores()[2])]
            case 4:
                this.#calc = Number(this.getCores()[0] + this.getCores()[1]) * 10**Number(this.getCores()[2])
                return [this.#calc, this.#calc * Number(this.getCores()[3])/100, Number(this.getCores()[2])]
            case 5:
                this.#calc = Number(this.getCores()[0] + this.getCores()[1] + this.getCores()[2]) * 10**Number(this.getCores()[3])
                return [this.#calc, this.#calc * Number(this.getCores()[4])/100, Number(this.getCores()[3])]
        }
    }

    getOhms(type) {
        switch (type) {
            case 'cor':
                this.#max = this.#format(this.sumCores()[0] + this.sumCores()[1], this.sumCores()[2])
                this.#min = this.#format(this.sumCores()[0] - this.sumCores()[1], this.sumCores()[2])
                return [this.#min.replace('.', ','), this.#max.replace('.', ',')]
        
            case 'valor':
                valor = this.#valor
                break;
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
                        return `${total/1000}K Ω`
            case 6:
                case 7:
                    case 8:
                        return `${total/1000000}M Ω`
            case 9:
                return `${total/1000000000}G Ω`
                
        }
    }
}
