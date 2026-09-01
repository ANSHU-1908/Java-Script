// Immediately Invoked Function Expressions (IIFE)

 
function myname (){
   return { username : 'Mishra' } ;
    // return username ;
}

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO ${myname().username}`) ;
} )() ; 

// to violate the polution caused by global scope 
