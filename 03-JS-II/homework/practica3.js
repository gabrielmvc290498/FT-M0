//Verificar si un numero tiene 3 digitos
var numero=123
if(numero.length===3){
    console.log(true);
  }else{
    console.log(false);
  }

  //valor verdadero o falso
valor=false
  if(valor===true){
    console.log("Soy verdadero" ); 
  }else{
    console.log("Soy falso"); 
  }
  
  var numero=0
  var i = 0;
  do {
    i = i + 1;
    numero = numero + 5;
  } while (i < 8);
  console.log(numero)

  //numero primo
  primo=true;
  numero=23
  for(let i=2;i<numero;i++){
    if(numero%i===0){
      primo=false
    }
  }
  if(primo===true){
    console.log(true);
  }else{
    console.log(false);
  }

    var numero=15;
    for(let i=2;i<numero;i++){
        if(numero%i===0){
        console.log(false);
        }
    }

    numero=25
        if(numero < 2){
            console.log(false);
        } 
        if(numero === 2){
            console.log(true);
        } 
        for(var i = 2; i < numero; i++) {
          if(numero % i === 0) {
            console.log(false);
          }else{
            console.log(true);
        }
        }
    