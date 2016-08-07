
// origin point: [0,0] bottom left.

var myRover = {
  position: [0,0], 
  direction: "N"
};

//http://www.quackit.com/javascript/tutorial/two_dimensional_arrays.cfm

var grid = new Array(10)

for (i=0; i <grid.length; i++) {
grid[i] = new Array(10); 
}


function goForward(rover) {
  switch(rover.direction) {
    case "N":
      rover.position [0]++;
      break;
    case "E":
      rover.position [1]++;
      break;
    case "S":
      rover.position [0]--;
      break;
    case "W":
      rover.position [1]--;
      break;
  };
    
// no entiendo el significado de esto

    if (rover.position[0] < 0) {
    rover.position[0] += 10;
  }

  if (rover.position[0] > 9) {
    rover.position[0] -= 10;
  }

  if (rover.position[1] < 0) {
    rover.position[1] += 10;
  }

  if (rover.position[1] > 9) {
    rover.position[1] -= 10;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch(rover.direction) {
    case "N":
     rover.position -=1;
      break;
    case "E":
      rover.position -=1;
      break;
     case "S":
      rover.position +=1;
      break;
    case "W":
      rover.position +=1;
      break; 
  };

//no entiendo el significado de esto

if (rover.position[0] < 0) {
    rover.position[0] += 10;
  }

  if (rover.position[0] > 9) {
    rover.position[0] -= 10;
  }

  if (rover.position[1] < 0) {
    rover.position[1] += 10;
  }

  if (rover.position[1] > 9) {
    rover.position[1] -= 10;
  }

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goleft(rover) {
switch(facing)
  {
    case "N":
      facing = "W";
      break;
    case "S":
      facing = "E";
      break;
    case "E":
      facing = "N";
      break;
    case "W":
      facing = "S";
      break;
  };

console.log("New Rover Direction: [" + rover.direction + "]")
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")

}

function move_right() {
  switch(facing) {
    case "N":
      facing = "E";
      break;
    case "S":
      facing = "W";
      break;
    case "E":
      facing = "S";
      break;
    case "W":
      facing = "N";
      break;
  };

console.log("New Rover Direction: [" + rover.direction + "]")
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")

}

// esta es la funcion que manda los movimientos

function commands() {
  var commands = prompt('Hi operator! Give me the sequence of commands to move the rover. Use f (foward), b (backward), l (left) or r (right).')

  var arrayCommands = commands.split("");

  for (var i = 0; i < arrayCommands.length; i++) {
    if (arrayCommands[i] == 'f') {
      goForward(myRover);
    }

    else if (arrayCommands[i] == 'b') {
      goBackward(myRover);
    }

    else if (arrayCommands[i] == 'l') {
      turnLeft(myRover);
    }

    else if (arrayCommands[i] == 'r') {
      turnRigth(myRover);
    }

    else {
      alert('Please use only provided commands!');
      return commands();
    }
  }
}

commands();













}











}


goForward(myRover);