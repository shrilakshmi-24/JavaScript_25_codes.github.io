function smallest(arr){
   var  small=999999;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }

    }
    return small;
}
console.log(smallest([2,6,12,1,1.1,0.001]));
console.log(smallest([-1,-4,-6,6]));
console.log(smallest([1,1,1,1]));