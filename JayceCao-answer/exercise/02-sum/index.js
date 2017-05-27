var arguments = process.argv;

if (arguments[2] == 0)
    process.exit(-1);

var length = arguments.length;
for (var i=2, sum=0; i < length; i++) {
    sum += parseInt(arguments[i]);
}

console.log(sum);

