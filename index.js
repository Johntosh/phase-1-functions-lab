// Function to calculate distance in blocks from Scuber's headquarters
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters location
    return Math.abs(pickupLocation - hqLocation); // Absolute value to ensure positive distance
  }
  console.log(distanceFromHqInBlocks(50));

  // Function to convert distance from blocks to feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  console.log(distanceFromHqInFeet(50)); 

  // Function to calculate distance traveled in feet between two blocks
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock); 
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }
  console.log(distanceTravelledInFeet(34, 38));
  
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    
    if (feetTravelled > 2500) {
      return 'cannot travel that far'; 
    } else if (feetTravelled > 2000) {
      return 25; 
    } else if (feetTravelled > 400) {
      return (feetTravelled - 400) * 0.02; 
    } else {
      return 0;
    }

  }
  console.log(calculatesFarePrice(34, 38)); 
 