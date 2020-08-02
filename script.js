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

    if((document.getElementById("display").value) == (document.getElementById("pinDisplay").value)){

        document.getElementById("correct").style.display="block";
    }
    else{
        document.getElementById("wrong").style.display="block";
    }
});
