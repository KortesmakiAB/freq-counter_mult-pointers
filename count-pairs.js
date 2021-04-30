// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. 
// You can assume that there will be no duplicate values in the array.
// Time Complexity - O(N * log(N))
// or
// Time Complexity - O(N)


function countPairs(arr, num) {
    let foundPair = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) foundPair++;
        }
    }

    return foundPair;
}

module.exports = countPairs;