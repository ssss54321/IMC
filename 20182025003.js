function CalMujer(){
    let peso = document.getElementById('Peso').value;
    let estatura = document.getElementById('Estatura').value;

    let imc = (peso/(estatura*estatura));
    document.getElementById('imc').innerHTML=imc;
    if(imc<20){
       document.write("Bajo peso");
    }
    if(imc>20 && imc<23.9){
       document.write("Normal");
    }
    if(imc>24 && imc<28.9){
       document.write("Obesidad leve");
    }
    if(imc>29 && imc<37){
       document.write("Obesidad severa");
    }
    if(imc>37){
       document.write("Obesidad muy severa");
    }
}
function CalHombre(){
   let peso = document.getElementById('Peso').value;
   let estatura = document.getElementById('Estatura').value;

   let imc = (peso/(estatura*estatura));
   document.getElementById('imc').innerHTML=imc;
   if(imc<20){
       
   }
   if(imc>20 && imc<24.9){

   }
   if(imc>25 && imc<29.9){

   }
   if(imc>30 && imc<40){

   }
   if(imc>40){

   }
}