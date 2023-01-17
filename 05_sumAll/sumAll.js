const sumAll = function (a, b) {

    if (!(typeof (a) == "number" && typeof (b) == "number")) {
        return ("ERROR")
    }

    a = Number(a);
    b = Number(b);

    if (a < 0 || b < 0) {
        return ("ERROR");
    }

    let limit, begin;
    let sum = 0;

    if (a < b) {
        limit = b;
        begin = a;
    } else {
        limit = a;
        begin = b;
    }

    for (let i = begin; i <= limit; i++) {
        sum = sum + i;
    }

    return (sum);

};

// Do not edit below this line
module.exports = sumAll;
