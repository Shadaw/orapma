let button = document.getElementById('button')


button.addEventListener('click', function(){
  document.getElementById('resultOff').value = semFaleMais()
  document.getElementById('resultOn').value = comFaleMais()
})

// funcao para receber um valor do html
function getValue(a) {
  return document.getElementById(a).value
}

//funcao para retornar o valor com os planos falemais
function comFaleMais() {
  if (excendentes(getValue('origem'), getValue('destino')) === 0 ) {
    return 'valores invalidos'
  }
  else if (getValue('plano') === 'falemais30' && getValue('tempo') > 30) {
    return `R$ ${((getValue('tempo') - 30) * excendentes(getValue('origem'), getValue('destino')) * 1.1).toFixed(2).replace('.', ',')}`
  } 
  else if (getValue('plano') === 'falemais60' && getValue('tempo') > 60) {
    return `R$ ${((getValue('tempo') - 60) * excendentes(getValue('origem'), getValue('destino')) * 1.1).toFixed(2).replace('.', ',')}`
  } 
  else if (getValue('plano') === 'falemais120' && getValue('tempo') > 120) {
    return `R$ ${((getValue('tempo') - 120) * excendentes(getValue('origem'), getValue('destino')) * 1.1).toFixed(2).replace('.', ',')}`
  }
  return `R$ 0,00`
}


// funcao para retornar o valor sem os planos falemais
function semFaleMais() {
  if (excendentes(getValue('origem'), getValue('destino')) === 0) {
    return 'valores invalidos'
  }
  else if (getValue('plano') === 'falemais30' && getValue('tempo')) {
    return `R$ ${(getValue('tempo') * excendentes(getValue('origem'), getValue('destino'))).toFixed(2).replace('.', ',')}`
  } 
  else if (getValue('plano') === 'falemais60' && getValue('tempo')) {
    return `R$ ${(getValue('tempo') * excendentes(getValue('origem'), getValue('destino'))).toFixed(2).replace('.', ',')}`
  } 
  else if (getValue('plano') === 'falemais120' && getValue('tempo')) {
    return `R$ ${(getValue('tempo') * excendentes(getValue('origem'), getValue('destino'))).toFixed(2).replace('.', ',')}`
  }
}

// funcao para calcular o tempo excendente e gerar o valor.
function excendentes(origem, destino) {
  if(origem === '011' && destino === '016') {
    return 1.9
  } else if (origem === '016' && destino === '011') {
    return 2.9
  } else if (origem === '011' && destino === '017') {
    return 1.7
  } else if (origem === '017' && destino === '011') {
    return 2.7
  } else if (origem === '011' && destino === '018') {
    return 0.9
  } else if (origem === '018' && destino === '011') {
    return 1.9
  }
  return 0
}