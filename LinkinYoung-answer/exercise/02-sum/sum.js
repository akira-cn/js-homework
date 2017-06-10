process.stdin.setEncoding('utf8');
var sum = 0;
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    if (chunk != 0) {
        sum = sum + parseInt(chunk);
    } else {
        console.log("sum", sum);
        process.exit();
    }
  }
});