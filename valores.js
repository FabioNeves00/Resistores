function show() {
  const resistor = new Resistor()
  let unit = document.getElementById('units')
  if(document.getElementById('resInput').value == '') {alert('Insira um valor na caixa')}
  let resis = Number(document.getElementById('resInput').value) * (10 ** unit.options[unit.selectedIndex].value)
  resistor.setResistencia(resis)
  document.getElementById('color_list').innerHTML = resistor.getOhms('valor').resistor
}
