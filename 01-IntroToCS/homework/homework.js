'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //compruebo que se reciba un string
  //caso contrario retorno un error
  if (num.constructor !== String){
    return 'No se ingresó un texto'
  }
  //utilizo una expresion regular para reemplazar lo que no sea 01
  num = num.replace(/[^01]/gi, '')
  //retorno el argumento con base 2
  return Number.parseInt(num, 2)
}

function DecimalABinario(num) {
  // tu codigo aca
  //retorno el arg con su metodo toString con base 2
  return num.toString(2)

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}