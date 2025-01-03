function subString(str) {
    if (str.length > 15) {
        return str.substring(0, 10) + "...";
    }
    return str;
}

console.log(subString("xinchaocacbandenvoiTechmaster")); // Output: xinchaocac...
console.log(subString("shortstring")); // Output: shortstring
