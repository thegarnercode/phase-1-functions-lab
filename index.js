// Code your solution in this file!

//returns the number of blocks given a value
function distanceFromHqInBlocks(start){
 return Math.abs(start - 42)
 }

   // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
 // the return value of distanceFromHqInBlocks can then be used to calculate feet
 function distanceFromHqInFeet(street) {
    distanceFromHqInBlocks(street);
    return (distanceFromHqInBlocks(street) * 264);
}


function distanceTravelledInFeet(start, destination) {
    return ((Math.abs(start - destination)) * 264);
}


function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 &&  distance <= 2000){
        return .02*(distance-400)
    } else if (distance > 2000 && distance < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
    }


