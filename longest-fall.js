// Write a function called longestFall, which accepts an array of integers.
// It returns the length of the longest consecutive decrease of integers.

function longestFall(arr) {
    if (arr.length === 0) return 0;

    let fallLength = 1;
    let currFallLength = 1;
    let pointer = 0;

    while (pointer < arr.length - 1) {
        
        if (arr[pointer] > arr[pointer + 1]) currFallLength++;
        else if (arr[pointer] <= arr[pointer + 1]) currFallLength = 1;

        pointer++;

        fallLength = fallLength >= currFallLength ? fallLength : currFallLength;
    }
    
    return fallLength;        
}

module.exports = longestFall;