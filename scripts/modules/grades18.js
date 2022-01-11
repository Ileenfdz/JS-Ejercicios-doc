let parent = document.getElementById('divGetGrade');

export function getGrade(){
    let grade = document.getElementById('grade').value;
    let result = document.createElement('h3');

    console.log('connected');
    if(grade < 3){
        console.log('connected1');
        result.innerHTML = ('Muy deficiente');
        parent.appendChild(result);
    }else if(grade < 5){
        result.innerHTML = ('Insuficiente');
        parent.appendChild(result);
    }else if(grade < 6){
        result.innerHTML = ('Suficiente');
        parent.appendChild(result);
    }else if(grade < 7){
        result.innerHTML = ('Bien');
        parent.appendChild(result);
    }else if(grade < 9){
        result.innerHTML = ('Notable');
        parent.appendChild(result);
    }else if(grade < 10){
        result.innerHTML = ('Sobresaliente');
        parent.appendChild(result);
    }
}