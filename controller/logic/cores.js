function catchValues() {
    let arm = []
    let selections = document.querySelectorAll('select')
    selections.forEach(element => {
        arm.push(element.options[element.selectedIndex].value)
    });
    arm.shift()
    return arm
}

function generate() {
    const faixa = document.getElementById('faixas');
    const div = document.getElementById('colors');
    let qntd = faixa.options[faixa.selectedIndex].value;
    div.innerHTML = ''
    for (let i = 1; i < qntd; i++) {
        div.innerHTML += `
        <select id="color${i}">
            <option value="0">Preto</option>
            <option value="1">Marrom</option>
            <option value="2">Vermelho</option>
            <option value="3">Laranja</option>
            <option value="4">Amarelo</option>
            <option value="5">Verde</option>
            <option value="6">Azul</option>
            <option value="7">Lilas</option>
            <option value="8">Cinza</option>
            <option value="9">Branco</option>
        </select>`
    }
    if(qntd == 3) {
        div.innerHTML += `
        <select id="color1">
            <option value="0">Preto</option>
            <option value="1">Marrom</option>
            <option value="2">Vermelho</option>
            <option value="3">Laranja</option>
            <option value="4">Amarelo</option>
            <option value="5">Verde</option>
            <option value="6">Azul</option>
            <option value="7">Lilas</option>
            <option value="8">Cinza</option>
            <option value="9">Branco</option>
        </select>`
        return
    }
    div.innerHTML +=
        `<select id="tolerate">
            <option value="5">Dourado</option>
            <option value="10">Prateado</option>
            <option value="20" selected>Nenhum</option>
        </select>`
}

function show() {
    const resistor = new Resistor()
    const int_resis = document.getElementById('resistance')
    const tolerancia = document.getElementById('tolerancia')
    const equation = document.getElementById('equation')
    resistor.setCores(catchValues())
    equation.innerHTML = `${resistor.getEquation()} = ${resistor.sumCores()[0]} Ω`
    tolerancia.innerHTML = `${catchValues()[catchValues().length - 1] != 0 ? catchValues()[catchValues().length - 1]:20}%`
    int_resis.innerHTML = `De ${resistor.getOhms('cor')[0]} até ${resistor.getOhms('cor')[1]}`
}
