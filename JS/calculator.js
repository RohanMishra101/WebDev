let textBox1 = document.getElementById('textBox');
let textBox2 = document.getElementById('textBox1');
let result = document.getElementById('label')

function add(){  
    let a = parseInt(textBox1.value);
    let b = parseInt(textBox2.value);
    let sum = a+b;
    result.innerHTML = "Add : " + sum; 

    result.style.display = "block";
}



function sub(){
    let a = parseInt(textBox1.value);
    let b = parseInt(textBox2.value);
    let sub = a-b;
    result.innerHTML = "Sub : " + sub; 

    result.style.display = "block";
}

function rem(){
    let a = parseInt(textBox1.value);
    let b = parseInt(textBox2.value);
    let rem = a%b;
    result.innerHTML = "Rem : " + rem; 

    result.style.display = "block";
}

function mul(){
    let a = parseInt(textBox1.value);
    let b = parseInt(textBox2.value);
    let mul = a*b;
    result.innerHTML = "Mul : " + mul; 

    result.style.display = "block";
}


