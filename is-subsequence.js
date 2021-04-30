// Write a function called isSubsequence.
// It takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Time Complexity - O(N + M)

function isSubsequence(str1, str2) {

    let str1Idx = 0;
    let str2Idx = 0;

    while (str1Idx < str1.length) {
        if (str2Idx >= str2.length) return false

        if (str1[str1Idx] === str2[str2Idx]) {
            str1Idx++;
            str2Idx++;
        } 
        else str2Idx++;
    }

    return true;
}

module.exports = isSubsequence;