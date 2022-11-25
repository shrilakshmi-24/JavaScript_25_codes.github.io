//to remove spaces and print the characters
function removespace(str){
    var ns="";
    for(var i=0;i<str.length;i++){
        if(str[i]!=" "){
            ns=ns+str[i];
        }
    }
    return ns;
}
console.log(removespace("shri lakshmi shenoy kedinje"));