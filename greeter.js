var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(Student) {
    return "Hello, " + user.firstName;
}
var user = new Student("Steven", "R", "Schroeder");
document.body.innerHTML = greeter(user);
