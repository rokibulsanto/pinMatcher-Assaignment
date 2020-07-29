function calculate(string){

    num = parseInt(string);
    document.getElementById("display").value += num;

};

function randomNumber(){

    num = Math.random() * 10000;
    var result = Math.round(num);
    document.getElementById("pinDisplay").value = result;

   
};

