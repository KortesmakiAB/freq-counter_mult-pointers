// Write a function called averagePair. 
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.
// Time Complexity: O(N)

function averagePair(arr, targetAvg) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        const leftRightAvg = (arr[left] + arr[right]) / 2
        if (leftRightAvg === targetAvg) return true;
        else if (leftRightAvg > targetAvg) right--;
        else left++;
    }
    
    return false
}

module.exports = averagePair;