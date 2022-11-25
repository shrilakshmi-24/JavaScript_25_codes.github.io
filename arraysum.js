function arrayPlusArray(arr1, arr2) {
    var sum=[];
    var sum1=0;
    var n=arr1.length;
    var m=arr2.length;
    k=m+n;
    for(var i = 0; i < arr1.length; i++){
        sum.push(arr1[i] + arr2[i]);
     }
     for(var j=0;j<sum.length;j++){
        sum1+=sum[j];
     }
     return sum1;
}
    

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
