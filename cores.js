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
    div.innerHTML = `
        <div>
            <h3>Faixa 1:</h3>
            <select id="color1">
            <option value="1" style="background-color: brown;">Marrom (1Ω)</option>
            <option value="2" style="background-color: red;">Vermelho (2Ω)</option>
            <option value="3" style="background-color: orange;">Laranja (3Ω)</option>
            <option value="4" style="background-color: yellow;">Amarelo (4Ω)</option>
            <option value="5" style="background-color: green;">Verde (5Ω)</option>
            <option value="6" style="background-color: blue;">Azul (6Ω)</option>
            <option value="7" style="background-color: purple;">Lilas (7Ω)</option>
            <option value="8" style="background-color: gray;">Cinza (8Ω)</option>
              <option value="9">Branco (9Ω)</option>
            </select>
          </div>`
    for (let i = 2; i < qntd; i++) {
        if (i == qntd - 1) {

            div.innerHTML += `
            <div>
                <h3>Faixa ${i}:</h3>
                <select id="color${i}">
                <option value="-2" style="background-color: rgb(192, 187, 187);" >Prateado (0.01Ω)</option>
                <option value="-1" style="background-color: rgb(213, 216, 56);" >Ouro (0.1Ω)</option>
                    <option value="0" style="background-color: black;">Preto (0Ω)</option>
                    <option value="1" style="background-color: brown;">Marrom (1Ω)</option>
                  <option value="2" style="background-color: red;">Vermelho (2Ω)</option>
                  <option value="3" style="background-color: orange;">Laranja (3Ω)</option>
                  <option value="4" style="background-color: yellow;">Amarelo (4Ω)</option>
                  <option value="5" style="background-color: green;">Verde (5Ω)</option>
                  <option value="6" style="background-color: blue;">Azul (6Ω)</option>
                  <option value="7" style="background-color: purple;">Lilas (7Ω)</option>
                  <option value="8" style="background-color: gray;">Cinza (8Ω)</option>
                  <option value="9">Branco (9Ω)</option>
                </select>
            </div>`
        } else {
            div.innerHTML += `
            <div>
                <h3>Faixa ${i}:</h3>
                <select id="color${i}">
                <option value="0" style="background-color: black;">Preto (0Ω)</option>
                <option value="1" style="background-color: brown;">Marrom (1Ω)</option>
                  <option value="2" style="background-color: red;">Vermelho (2Ω)</option>
                  <option value="3" style="background-color: orange;">Laranja (3Ω)</option>
                  <option value="4" style="background-color: yellow;">Amarelo (4Ω)</option>
                  <option value="5" style="background-color: green;">Verde (5Ω)</option>
                  <option value="6" style="background-color: blue;">Azul (6Ω)</option>
                  <option value="7" style="background-color: purple;">Lilas (7Ω)</option>
                  <option value="8" style="background-color: gray;">Cinza (8Ω)</option>
                  <option value="9">Branco (9Ω)</option>
                </select>
            </div>`
        }
    }
    div.innerHTML +=
        `
        <div>
        <h3>Faixa de Tolerância:</h3>
        <select id="tolerate">
            <option value="5" style="background-color: rgb(213, 216, 56);" >Ouro (5%)</option>
            <option value="10" style="background-color: rgb(192, 187, 187);" >Prateado (10%)</option>
            <option value="20" selected>Nenhum (20%)</option>
        </select>
        </div>`
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
