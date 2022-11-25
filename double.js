function double(arr){
    var n=[];
    for(var i=0;i<arr.length;i++){
        n.push(arr[i]*2);
    }
    return n;
}
console.log(double([1,2,3]));