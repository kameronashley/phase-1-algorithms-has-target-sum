function hasTargetSum(array, target) {
  for(let i=0; i<array.length-1; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[i]+array[j] === target) {
        return true
      }
    }
  }
  return false 
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
/* 
  Write the Big O time complexity of your function here
*/

/* 
  1.Create a function that accepts two argument (array,target)
  2. Loop over each integer in the array (array at i)
  3. For each integer, we want to loop over every other integer (array at j), not necessarily the one we are on
  4. Test if the sum of both integers we are on (array at i, array at j) are === (target)
  5. If the condition holds, then return "true"
  6. If the codition is not held, then return "false"
*/

/*
  Create a for loop that runs through the array one time
  Nested inside is another for loop that loops through the other elements of the array at an index that is one greater than the first loop
  We want to add each index value of both loops
  If any 2 index values equals the target integer:
    Return "true"
  
  If the sum of any 2 integers in the array does NOT equal the target integer:
    Return "false"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
