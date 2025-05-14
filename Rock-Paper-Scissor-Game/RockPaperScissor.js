let wins=0,loses=0,ties=0;
        function result(myMove){

        let compMove=Math.random();
        if(compMove<1/3) compMove='rock';
        else if(compMove<2/3 && compMove>=1/3) compMove='paper'
        else compMove='scissor';


            if(compMove===myMove){
                document.getElementById("res1").innerHTML=`TIE!`; 
                ties++;}
            else if((compMove=='rock'&&myMove=='paper') ||(compMove=='paper'&&myMove=='scissor')||(compMove=='scissor'&&myMove=='rock')){
                document.getElementById("res1").innerHTML=`You win!`;
                wins++
            }
            else{
                document.getElementById("res1").innerHTML=`You lose!`;
                loses++;
        }    
            document.getElementById("res").innerHTML=`Your move is ${myMove} computer move is ${compMove}<br>Wins:${wins}<br>Loses:${loses}<br>Ties:${ties}`;
        }

        function reset(){
            wins=0,loses=0,ties=0;
             document.getElementById("res").innerHTML=`Wins:${wins} Loses:${loses} Ties:${ties}`;
        }