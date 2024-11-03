function runProgram(input) {
    let commands = input.trim().split("\n");
    let n = parseInt(commands[0]);
    let stack = [];
    
    for (let i = 1; i <= n; i++) {
      let operation = commands[i].split(" ");
      
      if (operation[0] === "1") { 
        // Push operation
        let x = parseInt(operation[1]);
        stack.push(x);
      } else if (operation[0] === "2") { 
        // Pop operation
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (operation[0] === "3") { 
        // Top operation
        if (stack.length > 0) {
          console.log(stack[stack.length - 1]);
        } else {
          console.log("Empty!");
        }
      }
    }
  }
  
  // Example input-output handling for testing
  if (process.env.USER === "") {
    runProgram(`6
  1 15
  1 20
  2
  3
  2
  3`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  