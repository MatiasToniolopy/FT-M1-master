"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  //Creo mi lista con 0 elementos
  this._length = 0;
  //Creo mi cabecera que sera null hasta que reciba un nuevo elemento
  this.head = null;
}

function Node(value) {
  //Defino el el valor que recibe por parametro el valor
  this.value = value;
  //Next es null porque aun no tiene su primer elemento
  this.next = null;
}

//Creo el metodo add al proto de LinkedList, recibe la data por parámetro
LinkedList.prototype.add = function(data) {
  //Defino mi nodo que va a recibir la data por parámetro
  let node = new Node(data);
  //Defino donde esta parado actualmente
  let current = this.head;
  //Pregunto si no hay valor inicial
  if (!current) {
    //De ser asi, head tomara el valor que recibe node
    this.head = node;
    //Y le suma 1
    this._length++;
    return node;
  }
  //Mientras haya un valor actual, habrá un next aunque sea null
  while (current.next) {
    //Y defino el valor actual como el siguiente
    current = current.next;
  }
  //Y el valor actual sera igual al nuevo nodo para no pisar el anterior
  current.next = node;
  //Se lo agrego sumando en 1
  this._length++;
  return node;
}

//Creo el metodo remove al proto de LinkedList
LinkedList.prototype.remove = function() {
  //Defino donde esta parado
  let current = this.head;
  //Si no hay valores retorno null
  if (this.head === null) return null;
  //Pregunto si tengo un solo valor
  else if (this.head.next === null) {
    //De ser asi lo elimino, seria el valor actual
    let remove = current.value;
    //Ahora el head pasa a ser null ya que no tiene mas elementos
    this.head = null;
    //Se elimina el elemento
    this._length--;
    return remove;
  }
  //Mientras haya mas de un valor
  while (current.next.next) {
    //Donde esta parado toma el valor del siguiente
    let current = current.next;
  }
  //Asigno el valor del siguiente para luego retornarlo
  let remove = current.next.value;
  //El valor actual de ese elemento será null
  current.next = null;
  //Se elimina
  this._length--;
  return remove;
}

//Creo el search add al proto de LinkedList, recibe como argumento un argumento
LinkedList.prototype.search = function(arg) {
  //Defino donde esta parado
  let current = this.head;
  //Mientras el valor actual no sea null
  while (current !== null) {
    //Verifico si me pasan una función o el tipo de dato
    if (typeof arg === 'function' ) {
      //Si el argumento recibe un valor actual
      if (arg(current.value) === true) {
        //Lo retorno
        return current.value;
      }//Y si el argumento es igual al valor actual 
    } else if (arg === current.value) {
      //Tambien lo retorno
      return current.value;
    }
    //Ahora queda parado en el valor siguiente
    current = current.next;
  }
  //Si no tengo nada retorno null
  return null;
}
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  //Creo buckets con el valor pedido
  this.numBuckets = 35;
  //Y la lista que esta vacia 
  this.buckets = [];
}

//Creo el metodo hash al proto HashTable, recibe por parametro una clave
HashTable.prototype.hash = function (key) {
  //Creo mi variable que va a contener la suma
  let sum = 0;
  //Recorro los indices d ela key
  for (let i = 0; i < key.length; i++) {
    //Y Determino pasandole el parametro a charCodeAt, el resultado de dicho parametro
    sum += key.charCodeAt(i)
  }
  //Retorno el anterior resultado con el modulo de la cant de Buckets
  return sum % this.numBuckets;
}

//Creo el metodo set al proto HashTable, recibe por parametro clave y valor
HashTable.prototype.set = function (key, value) {
  //Verifico que estoy recib un str, sino retorno un error
  if (typeof key !== 'string') throw TypeError('Debe ser un string');
  //Llamo al metodo hash para obtener el valor del indice y lo guardo en una variable
  let b = this.hash(key)
  //Si lo que ecuentra no esta definido
  if (this.buckets[b] === undefined) {
    //Lo guardo en un objeto vacio
    this.buckets[b] = {};
  }
  //Y le asigno el nuevo valor en su indice
  this.buckets[b][key] = value;
}

//Creo el metodo get al proto HashTable, recibe por parametro valor
HashTable.prototype.get = function (key) {
  //llamo al método hash para recuperar de nuevo el índice de la tabla.
  let b = this.hash(key);
  //Devuelvo el valor almacenado en la tabla[índice].
  return this.buckets[b][key];
}

//Creo el metodo hashKey al proto HashTable, recibe por parametro una clave
HashTable.prototype.hasKey = function (key) {
  //llamo al método hash para recuperar el índice de la tabla y lo guardo
  let b = this.hash(key);
  //Compruebo si la clave que recibo tiene algo definido
  return this.buckets[b].hasOwnProperty(key)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
