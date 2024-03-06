function change(){
    const html = document.documentElement;
    html.classList.toggle("light");
    var image = document.querySelector("#profile");
    var btn = document.getElementById("btn_style");
    var dt = document.getElementById("date");
    var register = new Date();
    
    if(html.classList.contains("light")){
        image.setAttribute("src", "./assets/darkcat.jpg");
        document.getElementById("color_txt").style.color = "#212121";
    }else{
        image.setAttribute("src", "./assets/lightcat.jpg");
        document.getElementById("color_txt").style.color = "#fdfaf0";
    }
    dt.textContent = format_date(register);
}

function format_date(item){
    var options = {
        month: "long", 
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options);
}