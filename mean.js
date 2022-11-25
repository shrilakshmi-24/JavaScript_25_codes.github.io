function mean(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
    
            sum+=arr[i];

        

    }
    return sum/arr.length;
}
console.log(mean([2,4,5,1]));