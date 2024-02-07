function html_description(){
    var html_desc = document.getElementById("html_desc");
    var css_desc = document.getElementById("css_desc");
    var js_desc = document.getElementById("js_desc");
    if(html_desc.textContent == ""){
        html_desc.textContent = "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo.";
        css_desc.textContent = ""; 
        js_desc.textContent = "";
    }else{
        clear();
    }
}
function css_description(){
    var html_desc = document.getElementById("html_desc");
    var css_desc = document.getElementById("css_desc");
    var js_desc = document.getElementById("js_desc");
    if(css_desc.textContent == ""){
        html_desc.textContent = "";
        css_desc.textContent = "CSS (Folha de Estilo em Cascata) é o código que você usa para dar estilo à sua página Web.";
        js_desc.textContent = "";
    }
    else{
        clear();
    }
    
}
function js_description(){
    var html_desc = document.getElementById("html_desc");
    var css_desc = document.getElementById("css_desc");
    var js_desc = document.getElementById("js_desc");
    if(js_desc.textContent == ""){
        html_desc.textContent = "";
        css_desc.textContent = "";
        js_desc.textContent = "JavaScript é uma linguagem de script orientada a objetos e plataforma cruzada usada para tornar as páginas da Web interativas.";
    }
    else{
        clear();
    }
    
}
function clear(){
    document.getElementById("html_desc").textContent = "";
    document.getElementById("css_desc").textContent = "";
    document.getElementById("js_desc").textContent = "";
}
function change_page(){
    window.location.href = 'http://127.0.0.1:5500/ativ00/page.html';
}
