const   marvel_Heros = ["thor","ironman","captionamerica",]
const dc_Heroes =  ["supeerman","batman","flash",]

// marvel_Heros.push(dc_Heroes)
// console.log(marvel_Heros)
// console.log(marvel_Heros[3][0]);
// console.log(marvel_Heros[3][1]);
// console.log(marvel_Heros[3][2]);

// marvel_Heros.concat(dc_Heroes)
// console.log(marvel_Heros);

//CONCAT => merz in one array

const  allheors = marvel_Heros.concat(dc_Heroes)
console.log(allheors)

//  SPEARD  => merz is one aararay 

const all_heros = [...marvel_Heros,...dc_Heroes]
console.log(all_heros)

//FLAT => merz in one arrays 

const newArramix = [1,1,1,1,[2,2,2,25,3,2,4,1,[1,1,2,1,4,3,[,2,1,5,2,4,32]]]]

const mixinONE = newArramix.flat(Infinity)
console.log(mixinONE)


//.isArray =>   to ask questions,  that is arra or,not 

console.log (Array.isArray('hitesh'))


// .FROM =>

console.log(Array.from('hitesh'))
console.log(Array.from({name:'hitesh'}))

//.OF =>

const score1 = 100
const score2 = 200 
const score3 = 300

console.log(Array.of(score1,score2,score3))




const newarrrayone3 = [1,1,2,5,6,4,6,7,3,4]

const newarrar2 = newarrrayone3.splice(1,3)
console.log(newarrar2)
console.log(newarrrayone3)



const arryf = [1,2,3,4,5,[4,5,6,5,6,5,[1,2,1,3,1,3,[1,2,1,2,1,3]]]]
const allfalt = arryf.flat(Infinity)
console.log(allfalt)