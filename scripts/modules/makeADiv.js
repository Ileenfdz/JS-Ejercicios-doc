const parent = document.getElementById('divDiv');

export function div(){
    console.log('Hola')
    let num = document.getElementById('num').value;
    let results = document.createElement('h3');

    for (let i=0;i < num/2; i++) {
        if (num % i === 0) {
            console.log(i," lo divide ");
            results.innerHTML = ( i + " lo divide ");
            parent.appendChild(results);
        }
    }
}