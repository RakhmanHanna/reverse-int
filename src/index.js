module.exports = function reverse(n) {
    let reversed = n.toString().split("").reverse().join("");
    if (reversed.endsWith("-")) {
        return parseInt(reversed);
    }
    return parseInt(reversed);
};

console.log(module.exports(-123));
