const parent = document.getElementById('divNumPrimo');

export function numPrimo(){
    
    let num = document.getElementById('num').value;
    let div = false;

    for (let i = 2;i < num; i++) {
        if ( num % i == 0) {
            console.log(i);
            return appendPrimo(div = false);
        }
    }

    return appendPrimo(div = true);
}

export function appendPrimo(div){
    let result = document.createElement('h3');

    if(div === false){
        result.innerHTML = ("No es un número primo");
        parent.appendChild(result);
    }else{
        result.innerHTML = ("Es un número primo");
        parent.appendChild(result);
    }  
}