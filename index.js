function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > target)
      continue;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] + array[i] === target)
        return true;
    }
  }
  return false;
}

/* 
  O(n²)
*/

/* 
  Loop through array starting at index 0
    Nested loop through array starting at index 1
      if main loop index + nested loop index = target
        return true
  if never returned true
    return false
*/

/*
  Loop through array starting at index 0
    Nested loop through array starting at index 1
      if main loop index + nested loop index = target
        return true
  if never returned true
    return false
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
