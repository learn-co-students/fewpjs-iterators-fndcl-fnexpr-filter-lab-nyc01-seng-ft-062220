// Code your solution here

function findMatching(drivers, string){
    return drivers.filter(x => 
         x.toLowerCase() === string.toLowerCase()
    )
}


function fuzzyMatch(drivers, string){
    return drivers.filter(x => 
         x.slice(0, 1) === string.slice(0, 1)
    )
}

function matchName(drivers, string){
    return drivers.filter(x => 
         x.name === string
    )
}