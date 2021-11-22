function catchValues() {
    let arm = []
    let selections = document.querySelectorAll('select')
    selections.forEach(element => {
        arm.push(element.options[element.selectedIndex].value)
    });
    arm.shift()
    if (arm.length === 3) {
        arm.push(20)
    }
    return arm
}

function generate() {
    const faixa = document.getElementById('faixas');
    const div = document.getElementById('colors');
    let qntd = faixa.options[faixa.selectedIndex].value;
    div.innerHTML = ''
    for (let i = 1; i < qntd; i++) {
        div.innerHTML += `
        <h3>Faixa ${i}:</h3>
        <select id="color${i}">
            <option value="0" style="background-color: black;">Preto</option>
            <option value="1" style="background-color: brown;">Marrom</option>
            <option value="2" style="background-color: red;">Vermelho</option>
            <option value="3" style="background-color: orange;">Laranja</option>
            <option value="4" style="background-color: yellow;">Amarelo</option>
            <option value="5" style="background-color: green;">Verde</option>
            <option value="6" style="background-color: blue;">Azul</option>
            <option value="7" style="background-color: purple;">Lilas</option>
            <option value="8" style="background-color: gray;">Cinza</option>
            <option value="9">Branco</option>
        </select>`
    }
    if (qntd == 3) {
        div.innerHTML += `
        <h3>Faixa 3:</h3>
        <select id="color3">
            <option value="0" style="background-color: black;">Preto</option>
            <option value="1" style="background-color: brown;">Marrom</option>
            <option value="2" style="background-color: red;">Vermelho</option>
            <option value="3" style="background-color: orange;">Laranja</option>
            <option value="4" style="background-color: yellow;">Amarelo</option>
            <option value="5" style="background-color: green;">Verde</option>
            <option value="6" style="background-color: blue;">Azul</option>
            <option value="7" style="background-color: purple;">Lilas</option>
            <option value="8" style="background-color: gray;">Cinza</option>
            <option value="9">Branco</option>
        </select>`
        return
    }
    div.innerHTML +=
        `
        <h3>Faixa de Tolerância:</h3>
        <select id="tolerate">
            <option value="5" style="background-color: rgb(213, 216, 56);" >Dourado</option>
            <option value="10" style="background-color: rgb(192, 187, 187);" >Prateado</option>
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
    tolerancia.innerHTML = `${catchValues()[catchValues().length - 1] != 0 ? catchValues()[catchValues().length - 1] : 20}%`
    int_resis.innerHTML = `De ${resistor.getOhms('cor')[0]} até ${resistor.getOhms('cor')[1]}`
}
