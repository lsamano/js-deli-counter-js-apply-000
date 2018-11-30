var katzDeliLine = [];

function takeANumber( line, name ) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing( line ) {
  if (line.length > 0) {
    var nextPerson = line[0];
    line.shift();
    return `Currently serving ${nextPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    
    var queue = [];
    for (var i = 0; i < line.length; i++ ) {
      queue.push(`${i+1}. ${line[i]}`);
    }
      return `The line is currently: ${queue.join(", ")}`;
      
  } else {
    return "The line is currently empty.";
  }
}
