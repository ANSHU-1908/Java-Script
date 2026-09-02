// this keyword refers current context (values or talk about what)

const user = {

    username : "Anshu" ,
    price : 499 ,
    welcomemessage : function(){

        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        

    }


}

// user.username = "harsh"
// user.welcomemessage()
// user.username = "Natta" 
// user.welcomemessage() 


// browser ke andar stand alonne jo object hai wo windows hai 

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     // console.log(this.username);
//     console.log(this);
    
// }

// const chai =  () => {

    // let username = "hitesh"
    // console.log(this.username);
//     console.log(this);
    
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// when we open scope we have to use return keyword but but if we dont use scope no need to use return keyword


// const addTwo = (num1, num2) =>  num1 + num2   // way to retun 

// const addTwo = (num1, num2) => ( num1 + num2 )  // way to return

// const addTwo = (num1, num2) => ({username: "hitesh"})   // way to return an object 

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


