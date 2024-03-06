function count() {
    const num = parseInt($('#input-number').val());

    if(isNaN(num)){
        $('#result').text("Type a number, only a number");
        return;
    }
    var print_result = "";

    if(num >= 1000){
        $('#result').text("Type a small number");
    }else{
        for(var i = 1; i <= num; i++){
            print_result = print_result + i + "/br"
        }
        $('#result').html(print-result);
    }
    
}