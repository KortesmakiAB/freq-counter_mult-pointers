// Write a function called separatePositive which accepts an array of non-zero integers. 
// Separate the positive integers to the left and the negative integers to the right. 
// The positive numbers and negative numbers need not be in sorted order. 
// The problem should be done in place (in other words, do not build a copy of the input array).
// Time Complexity: O(N)

function swapNums(num1, num2, arr) {
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
}

function separatePositive(arr) {
    let numPositives = 0;
    
    for (let num of arr) {
        if (num > 0) numPositives++;
    }
    
    let right = arr.length - 1;

    for (let left = 0; left < numPositives; left++) {
        if (arr[left] < 0) {
            if (arr[right] > 0){ 
                swapNums(left, right, arr);
                right--;
            }
            else {
                while (arr[right] < 0) {
                    right--;
                }
                swapNums(left, right, arr);
                right--;
            }
        }
    }

    return arr;
}

module.exports = separatePositive;
