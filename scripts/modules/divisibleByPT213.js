const parent = document.getElementById('divDivisiblePt2');

export function division(){
    let num =document.getElementById('num').value;
    let result = document.createElement('h3');
    let divisibleBy2 =document.createElement('h3');
    let divisibleBy3 =document.createElement('h3');
    let divisibleBy5 =document.createElement('h3');
    let divisibleBy7 =document.createElement('h3');

    divisibleBy2.innerHTML = (num % 2 == 0 ? ('Es divisible entre 2') : ('No es divisible entre 2'));
    divisibleBy3.innerHTML = (num % 3 == 0 ? ('Es divisible entre 3') : ('No es divisible entre 3'));
    divisibleBy5.innerHTML = (num % 5 == 0 ? ('Es divisible entre 5') : ('No es divisible entre 5'));
    divisibleBy7.innerHTML = (num % 2 == 0 ? ('Es divisible entre 7') : ('No es divisible entre 7'));

    parent.appendChild(divisibleBy2);
    parent.appendChild(divisibleBy3);
    parent.appendChild(divisibleBy5);
    parent.appendChild(divisibleBy7);
}