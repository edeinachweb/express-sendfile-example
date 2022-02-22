function btn001() {

    var greet;
    var number001 = input001.value;
    if (number001 >= 1 && number001 < 12) {
        greet = 'Buongiorno';
        document.getElementById("message001").innerHTML = greet;
    }
    if (number001 >= 12 && number001 <= 16) {
        greet = 'Buon Pomeriggio';
        document.getElementById("message001").innerHTML = greet;
    }
    if (number001 > 16 && number001 <= 20) {
        greet = 'Buona Sera';
        document.getElementById("message001").innerHTML = greet;
    }
    if (number001 > 20 && number001 <= 24) {
        greet = 'Buona Notte';
        document.getElementById("message001").innerHTML = greet;
    }
}