//reverse the string
function reverse(str){
    ns="";
    for(var i=str.length-1;i>=0;i--){
        ns=ns+str[i];
    }
    return ns;
}
console.log(reverse("nanana"));
console.log(reverse("na na na"));
