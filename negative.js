//return negative of number
function negative(n){
    if(n>0){
        return -n;
    }
    else if(n==0){
        return 0;
    }
    else    
        return n; 
}

console.log(negative(-9));
console.log(negative(9));
console.log(negative(0));
