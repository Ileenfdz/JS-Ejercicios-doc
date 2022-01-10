const parent = document.getElementById('twoDivs');

export function twoDivs(){
    console.log('Hola')
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.createElement('h3');

    for (let i=0;i < num1/2 && i < num2/2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i," los divide ");
            result.innerHTML = ( i + " los divide ");
            parent.appendChild(result);
        }
    }
}