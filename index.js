function findMatching(drivers, string){
    console.log(drivers)
    console.log(string)
    const newDrivers = drivers.filter(function (name){
        return name.toUpperCase() === string.toUpperCase()
    })
    return newDrivers
}

function fuzzyMatch(drivers, string){
    console.log("string", string)
    const newDrivers2 = drivers.filter(function(name){
        console.log("name", name)
        return name.startsWith(string) 
    }) 
    return newDrivers2
}


function matchName(drivers, string){
    console.log("drivers", drivers)
    const newDrivers3 = drivers.filter(function(driver){
       return driver.name === string
    })
    return newDrivers3 
}
