const stickSpin = "|/-|/-|";
let delay = 100;
const spinning = delay * stickSpin.length;

const spinLoop = setInterval(() => {
  for (let i = 0; i < stickSpin.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${stickSpin[i]}       `);
    }, delay * i);
  }
}, spinning);

setTimeout(() => {
  clearInterval(spinLoop);
  process.stdout.write("\n");
}, 3000);
