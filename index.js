// Code your solution here

function findMatching (drivers, str) {
    let filtered = drivers.filter(driver => {
        return driver.toUpperCase() === str.toUpperCase()
    })
    return filtered
}
function fuzzyMatch(drivers, str) {
    let filtered = drivers.filter(driver => {
        
        return driver.startsWith(str)
    })
    return filtered
}

function matchName(drivers, str) {
    let filtered = drivers.filter(driver => {

        return driver.name === str
    })

    return filtered
}