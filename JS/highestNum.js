
let getFirstNum = document.querySelector("#firstNum");
let getSecondNum = document.querySelector("#secondNum");
let displayResult = document.querySelector("#displayResult");

let _firstNum;let _secondNum;
let _result;let randomNumber;
let temp = "NaN";

function getNum(){
    randomNumber = Math.floor(Math.random() *100);
    temp = randomNumber;
    getFirstNum.value = randomNumber;    
}

function guess(){
    if(temp > randomNumber){
        displayResult.innerHTML = "First Number is Greater";
    }else if(temp == randomNumber){
        displayResult.innerHTML = "Both number are equal";
    }else{
        displayResult.innerHTML = "Second Number is Greatest";
    }
}

function getSecNum(){
    if(temp == "NaN"){
        getNum();
        randomNumber = Math.floor(Math.random() *100);
        getSecondNum.value = randomNumber;
        guess()
    }else{
        randomNumber = Math.floor(Math.random() *100);
        getSecondNum.value = randomNumber;
        guess();
    }
}

// function checkHighest(){
//     let a = parseInt(getFirstNum.value);
//     let b = parseInt(getSecondNum.value);
//     if(a > b){
//         displayResult.innerHTML = "First Number is Greater";
//     }else{
//         displayResult.innerHTML = "Second Number is Greatest";
//     }
// }