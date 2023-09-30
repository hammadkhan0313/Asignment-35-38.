var val1 = +prompt("Enter the First value")
var sign = prompt("Enter the Operator")
var val2 = +prompt("Enter the second value")

console.log(val1+sign+val2)
if(sign === `+`){
    alert(val1+val2)
}else if(sign === `-`){
    alert(val1 - val2)
}else if (sign === `*`){
    alert(val1*val2)
}else if (sign === `/`){
    alert(val1 / val2)
}else if (sign === `%`){
    alert(val1/val2*100 + `%`)
}
