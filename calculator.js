let result = document.getElementById("inputext");

let calculate = (number) => {
    result.value += number;
}

let Result = () => { 
    try { 
        result.value = eval(result.value)
    }
    catch(err){
        alert("Please Enter Valid Input")
    }
}

function clr(){
    result.value= " ";
}

function del(){
    result.value=result.value.slice(0,-1)
}

document.onkeypress = function (e) {
    keyPressed = String.fromCharCode(e.which);        
    if($("#calc").length > 0){
      $("#calc").append(keyPressed);
    }else{
      $("#calc").text(keyPressed);
    }
};