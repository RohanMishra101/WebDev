
let abs = "textBox";

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

// var 
// Es6 let const


let num1 = document.getElementById("numOne");
let num2 = document.getElementById("numTwo");
let num3 = document.getElementById("numThree");

let displayResult = document.getElementById("large");
var a,b,c;

function largeNumber(){
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    c = parseInt(num3.value);

    if(a > b && a > c){
        displayResult.innerHTML = "The greatest among three num "+ a+" "+b+" "+c+" "+ " is : "+ a;
    }else if(b > a && b > c){
        displayResult.innerHTML = "The greatest among three num "+ a+" "+b+" "+c+" "+ " is : "+ b;
    }else{
        displayResult.innerHTML = "The greatest among three num "+ a+" "+b+" "+c+" "+ " is : "+ c;
    }

}
