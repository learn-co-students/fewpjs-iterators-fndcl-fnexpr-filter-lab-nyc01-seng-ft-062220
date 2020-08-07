// Code your solution here
function findMatching(drivers, string){
    return drivers.filter( x => x.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter( x => x.startsWith(string))
}

function matchName(drivers, string){
    return drivers.filter( x => x.name == string) 
}


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

console.log(fuzzyMatch(drivers, 'Sa'));

console.log(matchName(drivers2, 'Bobby'));