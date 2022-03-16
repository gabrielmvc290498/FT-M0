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
  console.log(empiezaConNueve(975))


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

  console.log(todosIguales([1,1,1,1,1,1,1,1,1]))
    