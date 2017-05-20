var arguments = process.argv.slice(2);

var min = arguments[0];
for (var i in arguments) {
    var tmp = parseInt(arguments[i]);
    if (isNaN(tmp)) {
        console.log("Incorrect input!" + '\n');
        process.exit(-1);
    }

    if (tmp <= min) {
        min = tmp;
    }
}

console.log("The minimum of these numbers is " + min);
