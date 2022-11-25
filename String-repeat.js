//repeat the string nth time
function repeat(str,n){
    ns="";
    for(var i=0;i<n;i++)
        var ns=ns+str;
return ns;
}
console.log(repeat('hello',5));
console.log(repeat('bye',0));