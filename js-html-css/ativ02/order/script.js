function conn(){
    var name = document.getElementById("name").value;
    show(name);
}

function show(name){
    document.getElementById("print-name").textContent = name;
    var div = document.getElementById("selects-div");
    var err = document.getElementById("err");
    if(name && name.trim() != ""){
        div.style.display = "block";
        err.style.display = "none";
        document.getElementById("name").style.backgroundColor = "#fdfaf0";
    }else{
        err.style.display = "block";
        div.style.display = "none";
        document.getElementById("name").style.backgroundColor = "#00754a";
    }
}