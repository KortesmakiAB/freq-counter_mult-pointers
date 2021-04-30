// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time Complexity - O(N + M)

function makeFreqCounter(str) {

    const freqCounter = {};

    for (let char of str) {
        freqCounter[char] = freqCounter[char] +1 || 1;
    }

    return freqCounter;
}

function sameFrequency(num1, num2) {

    const freqCounter1 = makeFreqCounter(String(num1));
    const freqCounter2 = makeFreqCounter(String(num2));

    for (let strNum in freqCounter1) {
        if (freqCounter1[strNum] !== freqCounter2[strNum]) return false;
    }

    return true;
}

module.exports = sameFrequency;