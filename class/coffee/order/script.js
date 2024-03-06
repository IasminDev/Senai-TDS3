function start(){
    var name = document.getElementById("name").value;
    show(name);
}
function show(name){
    document.getElementById("print-name").textContent = name;
    var div = document.getElementById("selects_div");
    var err = document.getElementById("err");
    if(name && name.trim() != ""){
        div.style.display = "flex";
        err.style.display = "none";
        document.getElementById("name").style.backgroundColor = "#fdfaf0";
    }else{
        err.style.display = "flex";
        div.style.display = "none";
        name = "";
        document.getElementById("name").style.backgroundColor = "#00754a";
    }
}
function order(){
    var name = document.getElementById("name").value;
    var select_classics = document.getElementById("select_classic");
    var select_drinks = document.getElementById("select_drink");
    var select_desserts = document.getElementById("select_dessert");
    var total = 0;
    var classic = 0;
    var drink = 0;
    var dessert = 0;
    switch (select_classics.value) {
        case "Avocado Toast":
            total += 16.90;
            classic = 16.90;
            break;
        case "Sandwich":
            total += 14.90;
            classic = 14.90;
            break;    
        case "Egg Toast":
            total += 18.90;
            classic = 18.90;
            break; 
    }
    switch (select_drinks.value) {
        case "Tea":
            total += 4.90;  
            drink = 4.90;          
            break;
        case "Latte":
            total += 6.50;  
            drink = 6.50;               
            break;   
        case "Iced Coffee":
            total += 12.50;  
            drink = 12.50;            
            break; 
    }
    switch (select_desserts.value) {
        case "Pancake":
            total += 20.50;  
            dessert = 20.50;                      
            break;
        case "Vegan Yogurt":
            total += 16.90;  
            dessert = 16.90;              
            break;
        case "Chocolate Cheesecake":
            total += 24.90;  
            dessert = 24.90;              
            break;
    }

    if(classic == 0) {
        var selection_classic = "";
    }else{
        var selection_classic = select_classics.value;
    }
    if(drink == 0) {
        var selection_drink = "";
    }else{
        var selection_drink = select_drinks.value;
    }
    if(dessert == 0) {
        var selection_dessert = "";
    }else{
        var selection_dessert = select_desserts.value;
    }

    document.getElementById("print_name").textContent = name;
    document.getElementById("head_end").style.display = "flex";
    document.getElementById("result").textContent = "R$ " + total.toFixed(2);
    document.getElementById("finish_div").style.display = "flex";
    document.getElementById("name_classic").textContent = selection_classic;
    document.getElementById("value_classic").textContent = " R$ " + classic.toFixed(2);
    document.getElementById("name_drink").textContent = selection_drink;
    document.getElementById("value_drink").textContent = " R$ " + drink.toFixed(2);
    document.getElementById("name_dessert").textContent = selection_dessert;
    document.getElementById("value_dessert").textContent = " R$ " + dessert.toFixed(2);
    document.getElementById("total_div").style.display = "flex";
}
function clear_select(){
    document.getElementById("name").value = "";
    document.getElementById("selects_div").style.display = "none";
    document.getElementById("head_end").style.display = "none";
    document.getElementById("finish_div").style.display = "none";
    document.getElementById("total_div").style.display = "none";
    document.getElementById("select_classic").value = "Select";
    document.getElementById("select_drink").value = "Select";
    document.getElementById("select_dessert").value = "Select";
}