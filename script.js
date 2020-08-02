function calculate(string){

    num = parseInt(string);
    document.getElementById("display").value += num;
    

};


function randomNumber(){

    num = Math.random() * 10000;
    var result = Math.round(num);
    document.getElementById("pinDisplay").value = result;
    
 
};


document.getElementById("submit-area").addEventListener('click',function(){


    if((document.getElementById("pinDisplay").value && document.getElementById("display").value) == ""){

        document.getElementById("wrong").style.display="block";
    }

    else if((document.getElementById("display").value) == (document.getElementById("pinDisplay").value)){

        document.getElementById("correct").style.display="block";
        

    }
    else{
        document.getElementById("wrong").style.display="block";

        let tries = document.getElementById("tries").innerHTML;
        let changes = parseInt(tries);

        if(changes>0){

            document.getElementById("tries").innerHTML =  changes - 1;
        }

        if(changes<=0){

            document.getElementById("actionLeft").innerHTML = "sorry! could not verify the pin";
            document.getElementById("display").value = "";
            document.getElementById("pinDisplay").value = "";
        }
    }
});


