function start(){
    var name = document.getElementById("name").value;
    show(name);
}
function show(name){
    document.getElementById("print-name").textContent = name;
    var div = document.getElementById("selects_div");
    var err = document.getElementById("err");
    if(name && name.trim() != ""){
        name = "";
        div.style.display = "flex";
        err.style.display = "none";
        document.getElementById("initial_div").style.display = "none";
        document.getElementById("name").style.backgroundColor = "#fdfaf0";
    }else{
        name = "";
        err.style.display = "flex";
        div.style.display = "none";
        document.getElementById("name").style.backgroundColor = "#fab95b";
    }
}
function order(){
    var name = document.getElementById("name").value;
    var select_book = document.getElementById("select_book");
    var book = 0;
    switch (select_book.value) {
        case "Select":
            return;
            break;
        case "O Hobbit":
            book = 54.90;
            break;
        case "Lolita":
            book = 78.90;
            break;    
        case "Orgulho e Preconceito":
            book = 26.30;
            break; 
        case "O Pequeno Principe":
            book = 16.90;          
            break;
        case "Dom Casmurro":
            book = 36.90;               
            break;   
        case "Norwegian Wood":
            book = 83.90;            
            break; 
    }

    document.getElementById("print_name").textContent = name;
    document.getElementById("head_end").style.display = "flex";
    document.getElementById("finish_div").style.display = "flex";
    document.getElementById("name_book").textContent = select_book.value;
    document.getElementById("value_book").textContent = " R$ " + book.toFixed(2);
}

function send(){
    var name = document.getElementById("name").value;
    var select_book = document.getElementById("select_book");

    var phone = "5541999999999";
    var link = "https://wa.me/" + phone + "?text=Name: " + name +". Order: " + select_book.value;
    window.open(link, "_blank");
}

function clear_select(){
    document.getElementById("name").value = "";
    document.getElementById("select_book").value = "Select";
    document.getElementById("selects_div").style.display = "none";
    document.getElementById("head_end").style.display = "none";
    document.getElementById("finish_div").style.display = "none";
    document.getElementById("initial_div").style.display = "flex";
}
