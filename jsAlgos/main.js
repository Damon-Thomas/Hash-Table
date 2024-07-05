import { HashMap } from "./hash.js";
import { fib, fibsRec } from "./fib.js";
import { mergeSort } from "./mergesort.js";



console.log(fib(9))
console.log(fibsRec(10))

let arr1 = [3, 2, 1, 13, 8, 5, 0, 1]
let arr2 = [105, 79, 100, 110]

console.log(mergeSort(arr1))
console.log(mergeSort(arr2))

const test = new HashMap() 

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
console.log(test.entries())
console.log(test.buckets.toString())