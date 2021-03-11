

function newFunction(){
    if (confirm('Are you sure you want to reset these fields?')){
        document.getElementById("name").value="";
        document.getElementById("surname").value="";
        document.getElementById("city").value="";
    }
    else{
        var a = document.getElementById("name");
        var b = document.getElementById("surname");
        var b = document.getElementById("city");
    }
}


