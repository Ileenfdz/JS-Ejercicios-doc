const parent = document.getElementById('divGetAge')

export function getAge(){
    let age = document.getElementById('age').value;
    let result = document.createElement('h3');

    if(age >= 18){
        result.innerHTML = ('Es apto para conducir');
        parent.appendChild(result);
    }else{
        result.innerHTML = ('No es apto para conducir');
        parent.appendChild(result);
    }
}