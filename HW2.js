function checkProp(str, obj){
    return obj.hasOwnProperty(str);
}

const person = {
    city : "Moscow",
    age : 23,
    name : "Aleksey"
}

console.log(checkProp("age", person))
console.log(checkProp("prop", person));