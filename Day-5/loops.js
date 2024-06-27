const arr = ["a", 2, true, 4, "Hello"];

/**
 * For In loop
 */
for (let x in arr) {
  console.log(x);
}

/**
 * For Of loop
 */
for (let x of arr) {
  console.log(x);
}

/**
 * For Each
 */
/*arr.forEach((element) => {
  console.log(element);
});
*/
arr.forEach(function(element){
console.log(element);
});

console.log("For loop TYPES")