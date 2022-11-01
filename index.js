function findMatching(drivers, string){
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.slice(0, letters.length) === letters)
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase()
    )
}