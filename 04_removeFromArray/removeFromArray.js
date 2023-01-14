const removeFromArray = function (arrays, removeMe0, removeMe1, removeMe2, removeMe3) {
    var indices = new Array;
    var removeArrays = new Array;

    removeArrays.push(removeMe0);
    if (removeMe1 != null) {
        removeArrays.push(removeMe1);
    }
    if (removeMe2 != null) {
        removeArrays.push(removeMe2);
    }
    if (removeMe3 != null) {
        removeArrays.push(removeMe3);
    }

    for (let i = 0; i < removeArrays.length; i++) {
        if (arrays.includes(removeArrays[i])) {
            indices.push(arrays.indexOf(removeArrays[i]));
        }
    }

    indices.sort(function (a, b) { return a - b });

    for (i = indices.length - 1; i >= 0; i--) {
        arrays.splice(indices[i],1);
    }

    return arrays;
};

// Do not edit below this line
module.exports = removeFromArray;
