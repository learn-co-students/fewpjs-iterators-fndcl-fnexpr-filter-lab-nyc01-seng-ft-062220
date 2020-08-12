// Code your solution here
//findMatching 
function findMatching(drivers, name) {
    return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driversArr, string) {
    return driversArr.filter(driverName => driverName.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string) {
    return drivers.filter(obj => obj.name === string)
}


/*

### Write a Function To Match `object` Values To a Provided `string`

Write `matchName` - This function takes an array of `drivers` and a `string` as
arguments. In this function, each element of the `drivers` array is a
JavaScript object that has a property of `name`. The function should return
each element whose `name` property matches the provided `string` argument.

*/