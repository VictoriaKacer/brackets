module.exports = function check(str, bracketsConfig) {
    const a = [];
    const brackets = Object.fromEntries(bracketsConfig);
    console.log(brackets);
    for (const el of str.split``) {
        if (a[0] === el) {
            a.shift();
        } else if (brackets[el]) {
            a.unshift(brackets[el]);
        } else {
            return false;
        }
    }

    return a.length === 0;
    }