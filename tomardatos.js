// tomamos los valores de los dos primeros botones que son input tipo radio disfrazados
function  saberSiParesNones(){
    
var paresonones = document.getElementsByName('paresnones');
//console.log(paresonones);
	for (i=0;i<paresonones.length;i++){ 
      	if (paresonones[i].checked)
            var valorelegido = paresonones[i].value;   
   	} 
    
    return valorelegido;
    console.log(valorelegido);
 }

function  tomarnumeros(){
var numeros = document.getElementsByName('numeros');
//console.log(numeros);

	for (i=0;i<numeros.length;i++){ 
      	if (numeros[i].checked)
            var numeroelegido = numeros[i].value;
         
   	} 

    return numeroelegido;
    console.log(numeroelegido);
 }

