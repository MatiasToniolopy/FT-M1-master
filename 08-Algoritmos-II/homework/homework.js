'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Si el array tiene menos de un elemento retorno un array vacio
  if (array.length < 1) {
    return [];
  }
  //Declaro izq, der, y el num al azar del array
  var left = [];
  var right = [];
  var pivot = array[0];
  //itero sobre el array desde la pos 1 ya que no tiene sentido que el 1er elemento se compare a si mismo
  for (var i = 1; i < array.length; i++){
    //Si el elemento actual es menor mi pivot
    if (array[i] < pivot) {
      //Lo agrego a la izquierda
      left.push(array[i]);
    }
    else {
      //Sino lo agrego a la derecha
      right.push(array[i]);
    }
  }
  //Utilizo concat para juntar los arrays
  //LLamando a la funcion
  //Primero concateno la izq, luego el pivot y por ultimo la derecha
  return [].concat(quickSort(left), pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let mitad = Math.floor(array.length / 2);
  let izquierda = array.slice(0, mitad);
  let derecha = array.slice(mitad);
  arr = [];
  while (izquierda.length && derecha.length){
    if (izquierda[0] < derecha[0]) {
      arr.push(izquierda.shift())
    } else {
      arr.push(derecha.shift())
    }
  }

  return arr.concat(mergeSort(izquierda), mergeSort(derecha))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
