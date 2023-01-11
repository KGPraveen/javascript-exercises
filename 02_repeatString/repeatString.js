const repeatString = function (str, times) {
    let result = "";
    if (times < 0) {
        return ("ERROR")
    }
    for (let count = 0; count < times; count++) {
        result = result + str;
    }
    return (result);
};

// Do not edit below this line
module.exports = repeatString;