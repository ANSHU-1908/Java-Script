const marvel_heroes = [ "thor" , "iron-man" , "spider-man"] ;
const dc_heroes = ["superman" , "flash" , "batman"] ;

// marvel_heroes.push(dc_heroes) ;
// console.log(marvel_heroes);


// marvel_heroes.concat(dc_heroes) 
// console.log(marvel_heroes.concat(dc_heroes) ) ;

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

// const all_hero = [...marvel_heroes   ,   ...dc_heroes] ;
// console.log(all_hero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("ANshu"));
// console.log(Array.from("ANSHU"));

// console.log(Array.from({name : "ANSHU"}));    // in this scenario we have to give by what we have to build an array ! otherwise it will give you a empty array 

let  score1 = 100 ;
let  score2 = 200 ;
let  score3 = 300 ;

console.log(Array.of(score1 , score2 , score3));

