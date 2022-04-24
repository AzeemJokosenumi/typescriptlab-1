function myString(stringvalue) {
    return stringvalue.length;
}
console.log(myString("Function"));
function myString_spaces(stringvalue) {
    var num = stringvalue.replace(/\s+/, "").length;
    return num;
}
console.log(myString_spaces("Function"));
function myString_both(value, spaces) {
    var num;
    if (spaces) {
        num = stringvalue.replace(/\s+/, "").length;
    }
    return num;
}
