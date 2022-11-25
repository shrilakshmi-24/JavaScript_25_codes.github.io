//vowel count
function vowel(str){
    count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==('a'||'e'||'i'||'o'||'u')){
            count+=1;

        }
    }
    return count;

}
console.log(vowel("abracadabra"));