const removeFromArray = function (arr, ...nums) {
    return arr.filter(function (x) {
        return !nums.includes(x);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
