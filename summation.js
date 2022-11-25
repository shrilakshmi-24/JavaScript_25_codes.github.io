//sum of n numbers
function summation(num){
    var sum=0;
    for(var i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
console.log(summation(9));
console.log(summation(0));
console.log(summation(1));
