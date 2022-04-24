function myString1(stringvalue: string):number{
    return stringvalue.length;
}
console.log(myString1("Function"));

function myStringSpaces(stringvalue: string):number{
    let num:number = stringvalue.replace(/\s+/,"").length;
    return num;
}
console.log(myString_spaces("Function"));

function myStringBoth(value:string, spaces:boolean):number{
   
    let num:number;
    if(spaces){
        num = stringvalue.replace(/\s+/,"").length;
    } else {
        num = value.length;
    }
    return num;
}