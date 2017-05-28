process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    var tmp = parseInt(chunk);

    if(isNaN(tmp)) {
        process.stdout.write("This is not a number." + '\n');
    }
    else {
        if ((tmp % 2) == 0) {
            process.stdout.write("This is an even number." + '\n');
        }
        else {
            process.stdout.write("This is an odd number." + '\n');
        }
    }
});
