function showProps(obj) {
    var result = "";
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        result += i + " = " + obj[i] + "\n";
      }
    }
    console.log(result);
  }


const person = {
    city : "Moscow",
    age : 23,
    name : "Aleksey"
}

showProps(person, "person");


