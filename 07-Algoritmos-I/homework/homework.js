'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //Decalro el array a retornar con valor 1, ya que el num ingresado primero se divide por 1
  let array = [1];
  //Declaro una referencia que arranca de 2 por el motivo anterior
  let referencia = 2;
  //Mientras el numero sea mayor a 1
  while (num > 1) {
    //Si el resto dividido mi ref es 0
    if (num % referencia == 0) {
      //Voy a guardar mi referencia
      array.push(referencia);
      //El resultado se sigue dividiendo por mi referencia
      num /= referencia;
    } else {
      //SI el resto no es igual a 0, sumo en 1 mi referencia y sigo dividiendo
      referencia++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: [5, 1, 4, 2, 8]

  //Declaro una variable que almacene la longitud del array
  const l = array.length;
  //Itero sobre ese array
  for (let i = 0; i < l; i++ ) {
    //Esto hace que num mayor quede ultimo en su lugar
    for (let j = 0; j < l - 1 - i; j++ ) {
      //Pregunto si el num que estoy comparando es mayor que su siguiente
      if ( array[ j ] > array[ j + 1 ] ) {
        //Si es mayor lo intercambio de lugar con ese numero
        [ array[ j ], array[ j + 1 ] ] = [ array[ j + 1 ], array[ j ] ];
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código: [5, 1, 4, 2, 8]

  //Itero sobre todo el array
  for (let i = 1; i < array.length; i++) {
    //Guardo el indice -1 en j
    let j = i -1;//0
    //Referencia del valor del indice i
    let ref = array[ i ];//1
    //Comparo el valor del indice actual con el valor de referencia 
    while (j >= 0 && array[j] >= ref) {
      //Si se cumple la condición cambia de lugar
      array[j+1] = array[j]
      j--;
    }
    //Sino avanza un lugar y toma ese valor como referencia
    array[j+1] = ref;
  }
 
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código: [1, 4, 2, 5, 8]
  for (let i = 0; i < array.length; i++) {
    let ind = i; //0
    for (let j = i+1; j < array.length; j++) {//1
      if (array[j] < array[ind]){
        ind = j;
      }
    }
    if (i !== ind) {
      let ref = array[i];
      array[i] = array[ind];
      array[ind] = ref;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
