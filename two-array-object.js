// Write a function called twoArrayObject which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values. 
// Your function should return an object created from the keys and values. 
// If there are not enough values, the rest of keys should have a value of null. 
// If there not enough keys, just ignore the rest of values.


function twoArrayObject(keysArr, valsArr) {
    const obj = {}

    let idx = 0;
    for (let key of keysArr) {
        if (idx <= valsArr.length - 1){
            obj[key] = valsArr[idx];
            idx++;
        }
        else obj[key] = null;
    }

    return obj;
}

module.exports = twoArrayObject;