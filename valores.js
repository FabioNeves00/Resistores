function show() {
  const resistor = new Resistor()
  if(document.getElementById('resInput').value == '' || document.getElementById('resInput').value == '0') {
    document.getElementById('color_list').innerHTML = "VALOR INVÁLIDO"
    return
  }
  let unit = document.getElementById('units')
  let resis = Number(document.getElementById('resInput').value) * (10 ** unit.options[unit.selectedIndex].value)
  resistor.setResistencia(resis)
  document.getElementById('color_list').innerHTML = resistor.getOhms('valor').resistor
}
