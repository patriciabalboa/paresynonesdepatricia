 // funciones contadoras con clousure
var puntjug=function(){
     var contador=0;
     return function(){return contador++}
 }();
// ponemos los marcadores a 0
document.getElementById('puntjug').innerHTML=puntjug();

 var puntmaq=function(){
     var contador=0;
     return function(){return contador++}
 }();
//ponemos el marcador a 0 cuando se ejecute dentro de la función jugar esta se incrementará
document.getElementById('puntmaq').innerHTML=puntmaq();
