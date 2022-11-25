//sum of positive numbers
function positivesum(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];

        }

    }
    return sum;
}
console.log(positivesum([2,-3,6]));
