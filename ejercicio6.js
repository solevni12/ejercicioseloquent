function rango(val1, val2){

    let arr =[];
    let j=0;  
    for(let i=val1; i<=val2; i++){
    
      arr[j]= i;
      j++;
    }  
      
    return arr;
    }  
    
    //segunda parte
    
    function suma(numeros){
    let sum =0;
      
    for(let j=0; j<numeros.length; j++){
    
    sum += numeros[j];
    }  
    
      return sum;
    }
    
    console.log(suma(rango(1,10)));