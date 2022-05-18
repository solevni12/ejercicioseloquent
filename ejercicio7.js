

function revertirArray(arr){

    let aux=[];

    for(let i=1;i<=arr.length;i++){

        aux[i-1] = arr[arr.length-i];
    }


    return aux;
    
}

console.log(revertirArray(["A","B","C"]));