function clear(){
    console.log("oi");
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
    document.getElementById("num3").value = null;
    document.getElementById("num4").value = null;
    document.getElementById("num5").value = null;
    document.getElementById("num6").value = null;
    document.getElementById("num7").value = null;
    document.getElementById("num8").value = null;
    document.getElementById("num9").value = null;
    document.getElementById("num10").value = null;
    document.getElementById("num11").value = null;
    document.getElementById("res_add").textContent = "";
    document.getElementById("res_sub").textContent = ""
    document.getElementById("res_mult").textContent = "";
    document.getElementById("res_division").textContent = "";
    document.getElementById("res_average").textContent = "";
}

function add(){    
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    if(!isNaN(num1) && !isNaN(num2)){
        var res_add = num1 + num2;
        document.getElementById("res_add").textContent = res_add.toFixed(2);
    }
    else{
        clear();
        document.getElementById("res_add").textContent = "Invalid number";        
    }
}
function sub(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    if(!isNaN(num3) && !isNaN(num4)){
        var res_sub = num3 - num4;
        document.getElementById("res_sub").textContent = res_sub.toFixed(2);
    }
    else{
        clear();
        document.getElementById("res_sub").textContent = "Invalid number";
    }
}
function mult(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    if(!isNaN(num5) && !isNaN(num6)){
        var res_mult = num5 * num6;
        document.getElementById("res_mult").textContent = res_mult.toFixed(2);
    }
    else{
        clear();
        document.getElementById("res_mult").textContent = "Invalid number";
    }
}
function division(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    if(!isNaN(num7) && !isNaN(num8)){
        var res_division = num7 / num8;
        document.getElementById("res_division").textContent = res_division.toFixed(2);
    }
    else{
        clear();
        document.getElementById("res_division").textContent = "Invalid number";
    }
}
function average(){
    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;
    if(!isNaN(num9) && !isNaN(num10) && !isNaN(num11)){
        var res_average = (num9 + num10 + num11) / 3;
        document.getElementById("res_average").textContent = res_average.toFixed(2);
    }
    else{
        clear();
        document.getElementById("res_average").textContent = "Invalid number";
    }
}

function btt_clear(){
    clear();
}