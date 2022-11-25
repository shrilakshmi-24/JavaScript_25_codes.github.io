function count(arr){
    var c=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==true){
            c+=1;
        }
    }
    return c;
}
console.log(count([true,true,false,true]));
console.log(count([false,false,false]));