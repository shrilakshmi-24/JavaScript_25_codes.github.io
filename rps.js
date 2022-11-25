function rps(p1,p2){
    if(p1==='rock'){
        if(p2==='rock'){
            return 'Draw!';

        }
        if(p2==='paper'){
            return "player 2 won!";
        }
        if(p2==='scissors'){
            return "player 1 won!"
        }
    }
    if(p1==='paper'){
        if(p2==='paper'){
            return 'Draw!';

        }
        if(p2==='scissors'){
            return "player 2 won!";
        }
        if(p2==='rock'){
            return "player 1 won!"
        }
    }
    if(p1==='scissors'){
        if(p2==='scissors'){
            return 'Draw!';

        }
        if(p2==='rock'){
            return "player 2 won!";
        }
        if(p2==='paper'){
            return "player 1 won!"
        }
    }
}
console.log(rps('scissors','paper'));
console.log(rps('scissors','scissors'));
console.log(rps('rock','paper'));
