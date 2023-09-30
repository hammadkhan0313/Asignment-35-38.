var firstNum = +prompt("Enter the First Number")
var secondNum = +prompt("Enter the second Number")
function addition (){
if (isNaN(firstNum) || isNaN(secondNum)){
    alert("Enter the valid Number")
}else{
    const add = firstNum + secondNum
    return add
}
}
var result= addition();
alert(result);