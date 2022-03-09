var x=15;
var y=9;

if (x>y){
    console.log(x) ;
  }else if(x<y){
    console.log(y);
  }else{
    console.log(x);
  }
var edad=18
  if(edad>=18){
    console.log("Allowed") 
  }else{
    console.log("Not Allowed")
  }
  
  Math.floor()

var color="red"

  switch (color) {
    case "blue":
      console.log ("This is blue");
      break;
    case "red":
      console.log ("This is red");
      break;
    case "green":
      console.log ("This is green");
      break;
    case "orange":
      console.log ("This is orange");
      break;
    default:
      console.log ("Color not found");
  }


var numero=4
  if(numero-Math.floor(numero)===0){
    console.log(true);
  }else{
    console.log(false);
  }

  var numero=15
  if(numero%3===0 && numero%5!==0){
    console.log("fizz");
  }else if(numero%5===0 && numero%3!==0){
    console.log("buzz");
  }else if(numero%5===0 && numero%3===0){
    console.log(numero);
  }


  var num1=0
  var num2=0
  var num3=0

  if(num1<0 || num2<0 || num3<0){
    console.log("Hay negativos");
  }else if(num1===0 || num2===0 || num3===0){
    console.log("Error"); 
  }else if(num1>num2 && num1>num3){
    console.log("Número 1 es mayor y positivo");
  }else if(num3>num1 && num3>num2){
    console.log(num3+1);
  }else{
    console.log(false);
  }
