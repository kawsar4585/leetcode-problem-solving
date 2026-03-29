function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0]; // start with first string
    console.log('prefix 0', prefix)
    for (let i = 1; i < strs.length; i++) {
        console.log("loop number ", i)
        console.log('current string', strs[i])
        console.log('prefix', prefix);
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // reduce prefix
            console.log('slice prefix', prefix);
            if (!prefix) return ""; // no common prefix
        }
    } 
    console.log('returning prefix', prefix);
    return prefix;
}

// Example usage:
// console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["doga","racecar","car"]));   // ""