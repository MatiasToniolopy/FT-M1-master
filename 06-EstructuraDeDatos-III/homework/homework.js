"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//Creo el metodo insert que recibe un valor por parametro
BinarySearchTree.prototype.insert = function (value) {
  //Si el valor que recibo es menor a la raiz
  if (value < this.value) {
    //Voy a la izquierda y pregunto si hay algo
    if (this.left) {
      //Si hay algo le paso el valor para que lo agregue
      this.left.insert(value);
    } else {
      //Sino asigno el nuevo valor directamente
      this.left = new BinarySearchTree(value);
    }
  } else {
    //Sino voy a la derecha y pregunto si hay algun valor
    if (this.right) {
      //Si hay, le paso el valor para que lo agregue
      this.right.insert(value);
    } else {
      //Sino asigno el nuevo valor directamente
      this.right = new BinarySearchTree(value);
    }
  }
};

//Creo el metodo size el en proto de Binary
BinarySearchTree.prototype.size = function() {
  //Creo un contador sabiendo que al menos tengo un nodo
  let sum = 1;
  //Pregunto si tengo algo a la izq y lo sumo
  if (this.left) sum += this.left.size();
  //Pregunto si tengo algo a la derecha y lo sumo
  if (this.right) sum += this.right.size();
  //Retorno el total
  return sum;
}

//Creo el metodo contains el en proto de Binary que recibe un valor como parámetro
BinarySearchTree.prototype.contains = function(value) {
  //Si el valor actual es igual al valor que recibo, retorno true
  if (this.value === value) return true;
  //Si tengo un valor a la izq y ese valor el igual al que recibo, retorno true
  if (this.left?.contains(value)) return true;
  //Si tengo un valor a la der y ese valor el igual al que recibo, retorno true
  if (this.right?.contains(value)) return true;
  //Sino retorno false
  return false;
};

//Creo el metodo dep el en proto de Binary que recibe una func y un valor predeterminado parámetro
BinarySearchTree.prototype.depthFirstForEach = function(cb, order = 'in-order') {
  //Utizo switch para evaluar los diferentes casos
  switch (order) {
    //Inorder primero pregunto si tengo izq y hago la recursion con sus argumentos
    case 'in-order': {
      this.left?.depthFirstForEach(cb, order);
      //Voy guardando los valores
      cb(this.value);
      //Y termina yendo a la derecha
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case 'pre-order': {
      //Primero va a la raiz, luego a la izq y termina en la der
      cb(this.value);
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      break;
    }
    case 'post-order': {
      //Primero va la izq, luego derecha y termina en la raiz
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    }
  }
};

//Creo el metodo bread el en proto de Binary que recibe una func y le paso array como parámetro
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
  //Arranco por la raiz y luego a los siguientes niveles
  cb (this.value)
  //Si tengo izq lo agrego al array
  if (this.left) array.push(this.left)
  //Si tengo der lo agrego al array
  if (this.right) array.push(this.right)
  //Si hay algo en el array, saco el primero pasandole en cb y el array
  if (array.length) {
    array.shift().breadthFirstForEach(cb, array)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
