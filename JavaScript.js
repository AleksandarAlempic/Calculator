

let number1 = document.getElementById("button1").innerHTML;
let number2 = document.getElementById("button2").innerHTML;
let number3 = document.getElementById("button3");
let number4 = document.getElementById("button4");
let number5 = document.getElementById("button5");
let number6 = document.getElementById("button6");
let number7 = document.getElementById("button7");
let number8 = document.getElementById("button8");
let number9 = document.getElementById("button9");

let plusButton = document.getElementById("buttonPlus");
let minusButton = document.getElementById("buttonMinus");
let multipleButton = document.getElementById("buttonMultiple");
let buttonDiv = document.getElementById("buttonDiv");

let numberInMonitor = "";
let numberForOperations;

let firstNumber = "";
let SecondNumber = "";

let minusTriggered = false;
let plusTriggered = false;
let multipleTriggered = false; 
let divTriggered = false;
let fullstopTriggered = false;
let sqrtTriggered = false;

function clearMonitor(){
    document.getElementById("Monitor").value = "";
    numberInMonitor = "";
    minusTriggered = false;
    plusTriggered = false;
    multipleTriggered = false; 
    divTriggered = false;
    fullstopTriggered = false;
    sqrtTriggered = false;
}

function getNumberFromCalculator(number){
          if(numberInMonitor === ""){
           if(!minusTriggered & !plusTriggered & !multipleTriggered & !divTriggered){
            if(fullstopTriggered){
                numberInMonitor = numberInMonitor +  number;
                firstNumber = numberInMonitor;
            }
            else{
                numberInMonitor = number;
                firstNumber = number;
            }
              
           }
           else{
            if(fullstopTriggered){
                SecondNumber = "0." + number;
            }
            else{
                SecondNumber = number; 
            }
                
                if(minusTriggered){
                    document.getElementById("Monitor").value = firstNumber + " - " + SecondNumber;
                }
                else if (plusTriggered){
                    document.getElementById("Monitor").value = firstNumber + " + " + SecondNumber;
                }
                else if (multipleTriggered){
                    document.getElementById("Monitor").value = firstNumber + " * " + SecondNumber;
                }
                else if (divTriggered){
                    document.getElementById("Monitor").value = firstNumber + " : " + SecondNumber;
                }
                else {
                    document.getElementById("Monitor").value = firstNumber + " - " + SecondNumber;
                }
               
           }
        }
        else {
            if(fullstopTriggered){
                numberInMonitor = numberInMonitor + number;
                firstNumber = numberInMonitor;
            }
            else{
                firstNumber = number;
            }
            firstNumber = parseFloat(numberInMonitor);
        
            if(!minusTriggered & !plusTriggered & !multipleTriggered & !divTriggered){
                if(fullstopTriggered){
                    numberInMonitor = numberInMonitor;
                    firstNumber = parseFloat(firstNumber); 
                }
                else{
                    numberInMonitor = firstNumber + "" + number; 
                    firstNumber = parseFloat(firstNumber + "" + number); 
                }
             
            }
            else if (minusTriggered){
                if(fullstopTriggered){
                    SecondNumber = SecondNumber + "."+ number;
                    SecondNumber = parseFloat(SecondNumber + "." + number); 
                }
                else{
                    SecondNumber = parseFloat(SecondNumber + "" + number); 
                }
              
                 numberInMonitor = firstNumber + " - " + SecondNumber;
                 document.getElementById("Monitor").value = firstNumber + " - " + SecondNumber;
            }
            else if (plusTriggered){
                if(fullstopTriggered){
                    SecondNumber = SecondNumber + "."+ number;
                    SecondNumber = parseFloat(SecondNumber + "." + number); 
                }
                else{
                    SecondNumber = parseFloat(SecondNumber + "" + number); 
                }
            
                numberInMonitor = firstNumber + " + " + SecondNumber;
                document.getElementById("Monitor").value = firstNumber + " + " + SecondNumber;
           }
           else if (multipleTriggered){

            if(fullstopTriggered){
                SecondNumber = SecondNumber + "."+ number;
                SecondNumber = parseFloat(SecondNumber + "." + number); 
            }
            else{
                SecondNumber = parseFloat(SecondNumber + "" + number); 
            }

          
            numberInMonitor = firstNumber + " * " + SecondNumber;
            document.getElementById("Monitor").value = firstNumber + " * " + SecondNumber;
       }
       else if (divTriggered){
        if(fullstopTriggered){
            SecondNumber = SecondNumber + "."+ number;
            SecondNumber = parseFloat(SecondNumber + "." + number); 
        }
        else{
            SecondNumber = parseFloat(SecondNumber + "" + number); 
        }
        numberInMonitor = firstNumber + " : " + SecondNumber;
        document.getElementById("Monitor").value = firstNumber + " : " + SecondNumber;
   }
           else {
            SecondNumber = parseFloat(SecondNumber + "" + number); 
            numberInMonitor = firstNumber + " - " + SecondNumber;
            document.getElementById("Monitor").value = firstNumber + " - " + SecondNumber;
       }
            
        }
        document.getElementById("Monitor").value = numberInMonitor;
}

function minusFunction() {
     
    minusTriggered = true;
    plusTriggered = false;
    multipleTriggered = false;
    divTriggered = false;
    sqrtTriggered = false;
    fullstopTriggered = false;

     if(firstNumber === ""){
        document.getElementById("Monitor").value = numberInMonitor + " - ";
     }
     else{
        
        document.getElementById("Monitor").value = firstNumber + " - ";
     }    
}

function plusFunction11() {

    if(plusTriggered){
        numberInMonitor = firstNumber + " + " + SecondNumber + " + ";
        document.getElementById("Monitor").value = firstNumber + " + " + SecondNumber  + " + ";;
    }
     
    plusTriggered = true;
    minusTriggered = false;
    multipleTriggered = false;
    divTriggered = false;
    sqrtTriggered = false;
    fullstopTriggered = false;

     if(firstNumber === ""){
        document.getElementById("Monitor").value = numberInMonitor + " + ";
     }
     else{
        document.getElementById("Monitor").value = firstNumber + " + ";
     }
}

function multiple(){

    multipleTriggered = true;
    plusTriggered = false;
    minusTriggered = false;
    divTriggered = false;
    sqrtTriggered = false;
    fullstopTriggered = false;
    
     if(firstNumber === ""){
        document.getElementById("Monitor").value = numberInMonitor + " * ";
     }
     else{
        document.getElementById("Monitor").value = firstNumber + " * ";
     }
}

function divide(){

    divTriggered = true;
    multipleTriggered = false;
    plusTriggered = false;
    minusTriggered = false;
    sqrtTriggered = false;
    fullstopTriggered = false;
    
     if(firstNumber === ""){
        document.getElementById("Monitor").value = numberInMonitor + " : ";
     }
     else{
        document.getElementById("Monitor").value = firstNumber + " : ";
     }
}

function sqrt(){
    sqrtTriggered = true;
    divTriggered = false;
    multipleTriggered = false;
    plusTriggered = false;
    minusTriggered = false;
    fullstopTriggered = false;

    if (numberInMonitor === ""){
        numberInMonitor = 0;
        document.getElementById("Monitor").value = numberInMonitor;
    }
    else{
        numberInMonitor = Math.sqrt(numberInMonitor);
        document.getElementById("Monitor").value =  numberInMonitor;
    }

}

function fullStop(){
    fullstopTriggered = true;
   
     if(firstNumber === ""|| numberInMonitor === ""){
        document.getElementById("Monitor").value = "0.";
        numberInMonitor = "0.";
        firstNumber = numberInMonitor;
     }
     else if(SecondNumber != "" || SecondNumber === 0){
        numberInMonitor = numberInMonitor +  ".";
        document.getElementById("Monitor").value =  numberInMonitor;
     }
     else {
        numberInMonitor = numberInMonitor + ".";
        document.getElementById("Monitor").value =  firstNumber + ".";
     }
}


function testFunction(){ // If I leave a EqualFunction as name and make onClick with this name nothing happens - Same problem is with Plus() - I changed to PlusFunction11() - then it's triggered.
    document.getElementById("Monitor").value = numberInMonitor;
    if(minusTriggered){
        if(firstNumber === ""){
            numberInMonitor = parseFloat(numberInMonitor) - SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor
        }
        else{
            numberInMonitor = firstNumber - SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor;
            firstNumber = "";
            SecondNumber = "";
            minusTriggered = false;
        } 
    }
    else if (plusTriggered){
        if(firstNumber === ""){
            numberInMonitor = parseFloat(numberInMonitor) + SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor
        }
        else{
            numberInMonitor = firstNumber + SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor;
            firstNumber = "";
            SecondNumber = "";
            plusTriggered = false;
        } 
    }
    else if (multipleTriggered){
        if(firstNumber === ""){
            numberInMonitor = parseFloat(numberInMonitor) + SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor
        }
        else{
            numberInMonitor = firstNumber * SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor;
            firstNumber = "";
            SecondNumber = "";
            plusTriggered = false;
        } 
    }
    else if (divTriggered){
        if(firstNumber === ""){
            numberInMonitor = parseInt(numberInMonitor) + SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor
        }
        else{
            numberInMonitor = firstNumber / SecondNumber;
            document.getElementById("Monitor").value = numberInMonitor;
            firstNumber = "";
            SecondNumber = "";
            plusTriggered = false;
        } 
    }
    else{

    }

}

