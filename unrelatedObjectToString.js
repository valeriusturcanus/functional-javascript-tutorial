var obj = {1:'masa',2:'gagaag'};
var array = Object.keys(obj).map(function(key){return obj[key];});
// console.log(array);
function getShortMessages(messages) {
     // SOLUTION GOES HERE
     return messages.map(function (obj){return obj.message;}).filter(function(element){return element.length<=50;});
    //  return reformatedArray;
   };


var longArray = [
  {message:"mmamahamamahamamahamamahamamahamamahamamahamamahamamahaamaha"},
  {message:"mamahamamahamamahamamahamamahamamahamamahamamaha"},
  {message:"mamahamamahamamahamamahamamahamamahamamaha"},
  {message:"mamahamamahamamahamamahamamahamamaha"},
  {message:"mamahamamahamamahamamahamamaha"},
  {message:"mamahamamahamamahamamaha"},
  {message:"mamahamamahamamaha"},
  {message:"mamahamamaha"},
  {message:"mamahamamahamamahamamahamamahamamahamamahamamahamamahamamaha"},
  {message:"mamahamamahamamahamamahamamahamamahamamahamamahamamahamamahamamahamamaha"}
];
// console.log(getShortMessages(longArray));
module.exports = getShortMessages;
