// Code your solution here
function findMatching(drivers,search) {
    return drivers.filter(
        (nameSearch)=> nameSearch.toLowerCase() === search.toLowerCase()
           
    )

    
}
function fuzzyMatch(drivers,wa){
    const closeMatch= drivers.filter(names=>{
        return names.toLowerCase().startsWith(wa.toLowerCase())
    })
    return closeMatch
}



function matchName(drivers,soughtName){
    return drivers.filter(
        (drivers)=> drivers.name=== soughtName
    )
}
