function getShortMessages(messages) {
     // SOLUTION GOES HERE
     return messages.map(function (obj){return obj.message;}).filter(function(element){return element.length<50;});
   }

module.exports = getShortMessages;
