module.exports = function reverse(n) {
    let reversed = Number(String(n).split("").reverse().join(""));
    return reversed;
};

console.log(module.exports(654321));
