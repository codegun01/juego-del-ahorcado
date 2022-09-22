let palabrita;
let cant_errores = 0;
let cant_aciertos = 0;

const palabras = [
   'naranja',
   'pera',
   'fetuccinis',
   'reloj',
   'serpiente'
];


const btn = document.getElementById('jugar');
btn.addEventListener('click', iniciar);


function iniciar(event){
   btn.disabled = true;
   cant_errores = 0;
   cant_aciertos = 0;
   const parrafo = id('palabra_adivinar');
   parrafo.innerHTML = '';
   let valor_azar = obtener_random();
   palabrita = palabras[valor_azar];
   for(let i = 0; i < btn_letras.length; i++){
      btn_letras[i].disabled = false;
   }
   const cant_letras = palabrita.length;
   

   for(let i = 0; i < cant_letras; i++ ){
         const span = document.createElement('span');
         parrafo.appendChild(span);

   }
}

const btn_letras = document.querySelectorAll('#letras button');
for(let i = 0; i < btn_letras.length; i++){
      btn_letras[i].addEventListener('click', click_letras);
}


function click_letras(event){
   const spans = document.querySelectorAll('#palabra_adivinar span');
   const button = event.target;
   button.disabled = true;
   
   let letra = button.innerHTML.toLowerCase();
   const palabra = palabrita.toLowerCase();

   let acerto = false;
   let oportunity = 7;
   
   for(let i = 0; i < palabra.length; i++){
      if(letra == palabra[i] ){


         spans[i].innerHTML = letra;
         cant_aciertos++;
         acerto = true;
      }
   }

   if(acerto == false){
      cant_errores++;
      
   }

   oportunity -= cant_errores;

   if(cant_errores == 7){
      id('resultado').innerHTML = 'Perdiste, la palabra era ' + palabrita;
      game_over();
   }else if(cant_aciertos == palabrita.length){
      id('resultado').innerHTML = 'GANASTE FELICITACIONES!!!!';
      game_over();
   }

   console.log(palabrita);
   console.log('La letra ' + letra + ' en la palabra ' + palabra + ' existe ' + acerto);
   document.getElementById('op').innerHTML = oportunity;
}


function game_over(){
   for(let i = 0; i < btn_letras.length; i++){
      btn_letras[i].disabled = true;
      
   }

   btn.disabled = false;
}

game_over();

function obtener_random(){
    const cant_palabras = palabras.length;
    const valor_al_azar = parseInt(Math.random() * cant_palabras);
 
    return valor_al_azar;
 }
 
 function id(str){
    return document.getElementById(str);
 }