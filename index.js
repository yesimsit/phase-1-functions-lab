// Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks){
if(numberOfBlocks>42){
    return numberOfBlocks-42;
}else{
  return  42-numberOfBlocks;
}
}
function distanceFromHqInFeet(numberOfBlocks){
    return distanceFromHqInBlocks(numberOfBlocks)*264;
}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(start>destination){ 
     return (start-destination) * 264;}
    else{
        return (destination-start) *264;}
   
  }
  function calculatesFarePrice(start, destination){
      let x = distanceTravelledInFeet(start, destination)
      if(x <= 400){
          return 0
      }
      else if(x >= 400 && x < 2000){
          return .02 * (x-400);
      }
      else if(x >= 2000 && x <=2500){
          return 25
      }
      else{
           return 'cannot travel that far';
    }
  }