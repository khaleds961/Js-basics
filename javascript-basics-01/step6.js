function myFunction() {
    var firstNumber = document.getElementById("first_number").value;
    var secondNumber = document.getElementById("second_number").value;
    var reminder = firstNumber % secondNumber;
    alert(reminder);
}