function human_cat_dog(humanyears){
    let catage;
    let dogage;
    if(humanyears===1){
        return [humanyears,15,15];

    }
    if(humanyears===2){
        return [humanyears,24,24];
    }
    const excessyear=humanyears-2;
    const extracatyear=excessyear*4;
    const extradogyears=excessyear*5;
    return [humanyears,24+extracatyear,24+extradogyears];

}
console.log(human_cat_dog(1));
console.log(human_cat_dog(2));
console.log(human_cat_dog(10));