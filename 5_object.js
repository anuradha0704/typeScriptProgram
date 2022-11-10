var emp = {
    name: "Anu",
    score: 250
};
for (var element in emp) {
    console.log(element);
}
//console.log("array================================================");
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
//function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
// function add1(num1:number, num2:number) {
//     return num1+num2;
// }
// console.log(add1(10));
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");
//default value
function displayNew(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
displayNew(1, "Dnyanesh", "Admin");
displayNew(1, "Dnyanesh");
