var katzDeliLine = [];
var counter = 0;

function takeANumber( line ) {
  var number = counter++;
  return `Welcome. You are number ${number} in line.`;
}

function nowServing( line ) {
  if (line.length > 0) {
    var nextPerson = line[0];
    line.shift();
    return `Currently serving ${nextPerson}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine( line ) {
  if (line.length > 0) {

    var queue = [];
    for (var i = 0; i < line.length; i++) {
      queue.push(`${i+1}. ${line[i]}`);
    }
      return `The line is currently: ${queue.join(", ")}`;

  } else {
    return "The line is currently empty.";
  }
}
