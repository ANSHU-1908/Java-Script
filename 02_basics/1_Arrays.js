// Array 

// const myArr = [1 ,2 ,3 ,4 ,5] ;

// shallow copy = share copy same references ;
// deep copt = don't share copy of  same references 

// const myArr = new Array(1,2,3,4,5) ;

// myArr.unshift();   // add value at 0th index 
// myArr.shift() ;   // remove value from 0th index 

// console.log(myArr);

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // simple print the element on that index from x to y-1 and dont manipulate the given array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it manipulate the array as it remove all the element which is in limit and form a new array  of remaining element and those element which hs been extracted from boundation

console.log("C ", myArr);
console.log(myn2);

