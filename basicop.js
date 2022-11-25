function basicop(op, v1, v2)
{
    switch(op){
        case '+':return v1+v2;
                break;
        case '-':return v1-v2;
                break;
        case '*':return v1*v2;
                break;
        case '/':
                return v1/v2;
                break;

    }
  
}
console.log(basicop('+',3,9));
console.log(basicop('-',3,9));
console.log(basicop('*',3,9));
console.log(basicop('/',3,9));
