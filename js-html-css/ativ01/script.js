var global_name;
var global_email;
var global_message;

function check_data(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if(name != "" && message != ""){
        document.getElementById("miss_inf").textContent = "";
        global_name = name;
        global_email = email;
        global_message = message;

        document.getElementById("check_name").textContent = global_name;
        document.getElementById("check_email").textContent = global_email;
        document.getElementById("check_message").textContent = global_message;
    }else{
        document.getElementById("check_name").textContent = "";
        document.getElementById("check_email").textContent = "";
        document.getElementById("check_message").textContent = "";
        document.getElementById("miss_inf").textContent = "Missing information";
    }
}

function send(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    var phone = "5541999999999";
    var link = "https://wa.me/" + phone + "?text=Name: " + global_name + "Email: " + global_email + "\n" + global_message;
    window.open(link, "_blank");
}

function html_description(){
    var html_desc = document.getElementById("html_desc");
    var css_desc = document.getElementById("css_desc");
    var js_desc = document.getElementById("js_desc");
    if(html_desc.textContent == ""){
        html_desc.textContent = "HTML (Hypertext Markup Language) is the code you use to structure a web page and its content.";
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
        css_desc.textContent = "CSS (Cascading Style Sheets) is the code you use to style your web page.";
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
        js_desc.textContent = "JavaScript is an object-oriented scripting language used to make web pages interactive.";
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
