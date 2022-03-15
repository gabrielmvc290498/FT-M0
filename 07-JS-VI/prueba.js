var aux =25
var aux1="Hola"
var aux2=false
var aux3=undefined
var aux4=null
var aux5= function{}
var aux6=[1,2,3]
var aux7={name:"H"}
var aux8=10*5
var aux9=aux1.lenght

function escribir(palabra){
    return "hola esta es tu palabra {{palabra}}"
}
//callback
function saludo(palabra){
    return "hola esta es tu palabra {{palabra}}"
}

saludo(aux5)//callback es cuando se introduce como parametro una funcion

function anonima(usuario){
    return usuario +" es un buen usuario";
}

function crearsaludo(usuario,cb){
    return cb(usuario);
}

console.log(crearsaludo("Pepe",anonima))


var alumnos=["pepe","carlos","jose"]

alumnos.forEach(function(elemento){
    console.log(elemento)
})  

var numeros=[2,4,6,8]
aux=numeros.forEach((elemento)=>elemento/2)

aux1=numeros.map((elemento)=>elemento/2)

console.log(aux)
console.log(aux1)