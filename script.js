

/// esta función es el programa pares y nones///////
function jugar(){
    var jugador,  maquina;
   
// definimos jugador y maquina  como un array vacío que tendrá dos valores, el primero si es pares o nones y el segundo, el número del 1 al diez elegido 
    jugador =[];
    maquina =[];
    // el jugador elige,////////////////////////// 
    jugador[0] = saberSiParesNones();
   // jugador[0] = prompt('elige pares o impares');
    // maquina lo contrario de jugador
    if(jugador[0]==='pares'){
        maquina[0]='impares';
    }
    else{
        maquina[0]='pares';
    }
    
   // asignamos a la variable resultados un string que mostrará los valores
    var resultados= '<li> has elegido ' + jugador[0]+'</li>';
resultados+='<li> La maquina ha elegido ' + maquina[0]+'</li>';
    
    //////// saca dedos jugador//////////////// lo ponemos dentro de la función number para que se tome como un número ante la suma que tendrá en evaluar
    jugador[1]=Number(tomarnumeros());
    //saca dedos máquina// es un número aleatorio
    
    maquina[1]=Math.floor(Math.random()*11);
   // seguimos poneiendo los resultados en la variable resultados
    resultados+='<li> Elegiste el número ' + jugador[1]+'</li>';
resultados+='<li> La maquina ha elegido el número ' + maquina[1]+'</li>';
    
    // evaluamos jugada sumando los resultdos y haciedno modulo de los mismos
    var evaluar = (jugador[1]+maquina[1])%2;
   
    // decidimos quien gana dependiendo de la variable evaluar
    if (evaluar===0){// si sale pares, es decir que módulo 0
        if(jugador[0]==='pares'){
            resultados+='<li> Has ganado</li>';
         document.getElementById('puntjug').innerHTML=puntjug();
             document.getElementById('aplausos').play();
            
            }else{
                resultados+='<li> Has perdido</li>';
             document.getElementById('puntmaq').innerHTML=puntmaq();
                document.getElementById('boom').play();
            }
         }
     if (evaluar===1){// si sales impares es decir si el resultado del modulo es 1
        if(jugador[0]==='pares'){ 
            resultados+='<li>Has perdido</li>';
            
        document.getElementById('puntmaq').innerHTML=puntmaq(); 
            document.getElementById('boom').play();
            }else{ 
                resultados+='<li> Has ganado</li>';
             document.getElementById('puntjug').innerHTML=puntjug(); 
                 document.getElementById('aplausos').play();
                
            }
         }
 // mostramos en display la variable resultados en la que hemos ido acumulando los resultados  
document.getElementById('display').innerHTML=resultados;
   
}



