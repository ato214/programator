//At first I have created empty set
let myFirstSet = new Set();

// Then I have added value
myFirstSet.add(1);
myFirstSet.add(2);
myFirstSet.add(3);

// and other method
myFirstSet.add(2).add(11).add(12)
console.log(myFirstSet);

myFirstSet.delete(2);

console.log(myFirstSet);