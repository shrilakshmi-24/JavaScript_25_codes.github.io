function points(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        const val=arr[i];
        const parts=val.split(":");
        const x=parts[0];
        const y=parts[1];
        if(x>y){
            total+=3;
        }
        else if(x==y){
            total+=1;
        }
        else{

        }
    }
    return total;
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));