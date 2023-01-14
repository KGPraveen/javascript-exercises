const reverseString = function(str) {
    var strReverse = "";
    for (let i = 0 ; i < str.length ; i++) {
        strReverse = str[i] + strReverse;
    }
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
