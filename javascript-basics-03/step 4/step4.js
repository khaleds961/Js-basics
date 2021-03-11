var a = document.getElementById("password");
var b = document.getElementById("confirmation");
var c = document.getElementById("password");
var d = document.getElementById("confirmation");
function myFunction() {
    if (a.value != b.value) {
        c.style.border = "3px solid red";
        d.style.border = "3px solid red";

    } else {
        c.style.border = "1px solid black";
        d.style.border = "1px solid black";
        alert("The Same.")
    }
}