var buttons=document.getElementsByClassName("input-keys");

var display=document.getElementById("display");

var operand1=0;
var operand2=null;
var operator=null;
var result=null;

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value=this.getAttribute('data-value');

        if(value=='+')//if operator is click
        {
          operator='+';
          operand1=parseFloat(display.textContent);

        } else if(value=='-')
        {
          operator='+';
          operand1=parseFloat(display.textContent);

        }else if(value=='*'){
           operator='+';
          operand1=parseFloat(display.textContent);

        }else if(value=='/'){
          operator='/';
          operand1=parseFloat(display.textContent);

        }else if(value=='='){
            
            operand2=parseFloat(display.textContent);
            // used eval to get result
            //show result on display
          result=eval(operand1+""+operator+""+operand2)
          display.innerText +=result;
  
          }else{
            display.innerText +=value;
        }

    })
}
