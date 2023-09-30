var word = prompt("Enter a word")
var check = "";
function palindrome() {
    for( var i=word.length -1;i>=0;i--){
        check += word[i];
    }if(check === word){
        alert(word + " is Palidrome word")
    }else{
        alert("This is not Palidrome word")
    }
}
palindrome();