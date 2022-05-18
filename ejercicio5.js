

function esPar(val1) {


    if(val1==0){
        return true;
    }
    

    if(val1 == 1){

        return false;

    }else{
        return esPar(val1-2);
    }


}

console.log(esPar(15));