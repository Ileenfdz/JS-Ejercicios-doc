let parent = document.getElementById("divGetDNI");
let array = "TRWAGMYFPDXBNJZSQVHLCKET";			

export function calculateDNI(){
    let num = document.getElementById('num').value;
    let result = document.createElement('h3');
    let pos = num % 23;
    
    if (num < 0 || num > 99999999){
        num.placeholder = 'No es un número válido';
    }else{
        result.innerHTML = (array.charAt(pos));
        console.log(result)
        parent.appendChild(result);
    }
}