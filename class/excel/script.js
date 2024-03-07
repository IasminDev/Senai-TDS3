function addToTable(){
    var name = document.getElementById("name").value;
    var value = document.getElementById("value").value;
    var qtt = document.getElementById("quantity").value;

    if(!name || !value || !qtt){
        alert("Insert all")
        return;
    }

    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    var newLine = table.insertRow(table.rows.length);

    var cellName = newLine.insertCell(0);
    var cellValue = newLine.insertCell(1);
    var cellQtt = newLine.insertCell(2);

    cellName.innerHTML = name;
    cellValue.innerHTML = value;
    cellQtt.innerHTML = qtt;

    document.getElementById("name").value = "";
    document.getElementById("value").value = "";
    document.getElementById("quantity").value = "";
}

function removeOfTable(){
    var nameToRemove = document.getElementById("nameToRemove").value;

    if(!nameToRemove){
        alert("Insert name")
        return;
    }    
    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    var line = table.getElementsByTagName("tr");

    for(var i = 0; i < line.length; i++){
        var cellName = line[i].getElementsByTagName("td")[0];
        if(cellName && cellName.innerHTML === nameToRemove){
            table.deleteRow(i);
            return;
        }
        alert("Name not exists")
    }
    document.getElementById("nameToRemove").value = "";
}

function exportToTable(){
    var table = document.getElementById("table");
    var nameFile = "table_product.xlsx";
    var wb = XLSX.utils.table_to_book(table, {sheet:"Table of products"});
    XLSX.writeFile(wb, nameFile);
}