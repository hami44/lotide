const assertEqual = function(actual, expected){
if (actual === expected) {
console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
}else if (actual !== expected) {
console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

}

const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(words){

 return words.slice(1);
}

tail(words)
assertEqual(words.length, 3);


 
// console.log(tail(words));