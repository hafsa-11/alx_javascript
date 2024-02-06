console.log("Start of the execution queue");

// Using setTimeout to ensure the final code block is executed after the loop
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);

// Looping 100 times to log the iteration number
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");
