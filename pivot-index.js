// Write a function called pivotIndex which accepts an array of integers.
// It returns the pivot index where the sum of the items to the left is equal to the sum of the items to the right. 
// If there are more than one valid pivot index, return the smallest value.
// Time Complexity: O(N)

function getSum(arr, idx = 0){
    if (idx === arr.length) return 0;

    return arr[idx] + getSum(arr, idx + 1);
}

function pivotIndex(arr) {
    let smallestPivot;
    let currPivot = 1;
    
    while (currPivot < arr.length - 2){
        const leftSum = getSum(arr.slice(0, currPivot));
        const rightSum = getSum(arr.slice(currPivot + 1));

        if (leftSum === rightSum) {
            if (!smallestPivot) smallestPivot = currPivot;
            else smallestPivot = currPivot < smallestPivot ? currPivot : smallestPivot;
        }

        currPivot++;
    }

    return smallestPivot >= 1 ? smallestPivot : -1;
}

module.exports = pivotIndex;