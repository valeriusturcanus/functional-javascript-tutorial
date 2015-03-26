function repeat (operation,num){
  if (num <=0){return null;}
  operation();
  num = num-1;
  return repeat(operation,num);
}
module.exports = repeat
