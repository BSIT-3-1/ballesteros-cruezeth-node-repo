let n=5;
let str = "";

for (let x = 0; x <= n; x++) {
  for (let i = 1; i <= n - x; i++) {
    str += " ";
  }
  for (let j = 0; j < x; j++) {
    str += "*";
  }
  for (let k = 0; k < x; k++) {
    str += "*";
  }
  str += "\n";
}

for (let x = 1; x <= n; x++) {
  for (let i = 1; i <= x ; i++) {
    str += " ";
  }
  for (let j = x; j < n; j++) {
    str += "*";
  }
   for (let k = x; k < n; k++) {
    str += "*";
   }
  str += "\n";
}
console.log(str);