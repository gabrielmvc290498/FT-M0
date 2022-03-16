// No cambies los nombres de las funciones.
var array=["m",2,3,4,5,6,7,8,"p"];
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}
console.log(devolverPrimerElemento(array))

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  ultima=array.length-1;
  return array[ultima];
}
console.log(devolverUltimoElemento(array))


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
console.log(obtenerLargoDelArray(array))


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }
  return array;
}



var array=[]
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

console.log(agregarItemAlFinalDelArray(array,"Jose"));
console.log(agregarItemAlFinalDelArray(array,"Gabriel"));
console.log(agregarItemAlFinalDelArray(array,"Pedro"));

array=[]
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray(array,1));
console.log(agregarItemAlComienzoDelArray(array,2));
console.log(agregarItemAlComienzoDelArray(array,3));



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

console.log(dePalabrasAFrase(['Hello', 'world!']))


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i=0;i<=array.length;i++){
    if(elemento===array[i]){
      return true;
    }
  }
  return false;
}
console.log(arrayContiene(array,1))


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma=0;
  for(i=0;i<=numeros.length-1;i++){
    suma=suma+numeros[i];
  }
  return suma;
}



var notas=[11,18,15,20,14,16,9]
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=0
  for(i=0;i<=resultadosTest.length-1;i++){
    suma=suma+resultadosTest[i];
  }
  promedio=suma/resultadosTest.length;
  return promedio;
}
console.log(promedioResultadosTest(notas));


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor=numeros[0];
  for(let i=0;i<=numeros.length-1;i++){
    if(numeros[i]>mayor){
      mayor=numeros[i];
    }
  }
  return mayor;
}



function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  array=[]
  for(let i=0;i<=10;i++){
    array.push(i*6);
  }
  return array;   
}
console.log(tablaDelSeis());

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.lenght<1){
    return 0;
  }
  if (arguments.length===1){
    return arguments;
  }
  let multiplicacionTotal=1;
  for(let i=0;i<arguments.length;i++){
    multiplicacionTotal=multiplicacionTotal*arguments[i];
  }
  return multiplicacionTotal;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cont=0;
  for(let i=0;i<=arreglo.length-1;i++){
    if(arreglo[i]>18){
      cont=cont+1;
    }
  }
  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí
    if(numeroDeDia===1 || numeroDeDia===7){
      return "Es fin de semana";
    }else{
      return "Es dia Laboral";
    }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  while(n>=10){
    n=n/10
  }
  if(Math.trunc(n)===9){
    return true;
  }else{
    return false;
  }
}
console.log(empiezaConNueve(9745))

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let elemento=arreglo[0];
  val1=true;
  for(let i=0;i<=arreglo.length-1;i++){
    if(elemento===arreglo[i]){
      val=true;
    }else{
      val=false;
    }
    val1=val1&val;
  }
  if(val1){
    return true;
  }
  return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoarray=[];
  for(let i=0;i<array.length;i++){
    if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
      nuevoarray.push(array[i]);
    }else{
      return "No se encontraron los meses pedidos";
    }
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoarray=[];
  for(let i=0;i<array.length;i++){
    if(array[i]>100){
      nuevoarray.push(array[i]);
    }
  }
  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  array=[];
  for(let i=0;i<10;i++){
    numero=numero+2;
    array.push(numero);
    if(i===numero){
      return "Se interrumpió la ejecución";
      break;
    }else{
      return array;
    }
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  array=[];
  for(let i=0;i<10;i++){
    if(i!==5){
      numero=numero+2;
      array.push(numero);;
      continue;
    }
    }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
