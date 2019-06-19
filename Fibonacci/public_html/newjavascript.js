function print_primes(num) {
    var num = prompt("What Number do you want?")
    var array = [];

    for (i = 1; i <= num; i++) {
        if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
            array.push(i);
        } else if (i == 2 || i == 3 || i == 5 || i == 7) {
            array.push(i);
        }
    }
    document.getElementById("output").innerHTML = array;
}
