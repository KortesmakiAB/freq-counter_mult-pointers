// Write a function called constructNote, which accepts two strings: a message and some letters.
// The function should return true if the message can be built with the letters that you are given; 
// otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.


function makeFreqCounter(letters){
    const counterObj = {};

    for (let char of letters){
        counterObj[char] = counterObj[char] + 1 || 1;
    }

    return counterObj;
}

function constructNote(msg, letters) {
    if (!msg.length && letters) return true;
    if (!letters.length) return false;

    const ltrsFreqCounter = makeFreqCounter(letters);
    
    for (let char of msg) {
        if (!ltrsFreqCounter[char]) return false;
        
        ltrsFreqCounter[char]--;
    }

    return true;
}

module.exports = constructNote;