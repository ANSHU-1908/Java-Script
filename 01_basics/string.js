//  create a string 

const myName = "anshu" 

const name = "diptanshu"
const title = "mishra"
const myName1 = new String('aNsHumiS')

// console.log(myName) 
// console.log(myName1); 

// console.log(`hey my name is and ${myName} and ${myName1}`)   // string interpoletion method 
// console.log(`${name} and  ${title}`);
// console.log(`${name} ${title}`);


// console.log(myName[4]);
// console.log(myName.toUpperCase());

// console.log(myName1.toUpperCase());
// console.log(myName1.charAt(3));
// console.log(myName1.indexOf('u')) ;

// const newString = myName1.substring(1,4)
// console.log(newString); 

// const nStr = myName1.slice(-5 , 4)
// console.log(nStr);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
const gameName = new String('hitesh-hc-com')
console.log(gameName.split('h' , 2 ));



