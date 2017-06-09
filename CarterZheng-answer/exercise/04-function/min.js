function min(...arg)
{
  var minval = arg[0];
  for(i=0;i<arg.length;i++){
    if(minval > arg[i])
      minval = arg[i];
  }
  process.stdout.write(minval.toString());
  return;
}
min(1,2,3);
