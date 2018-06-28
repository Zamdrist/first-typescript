class Student{
    fullName: string;
    constructor(public firstName: string, middleInitial: string, lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(Student){
    return "Hello, " + user.firstName;
}

let user = new Student("Steven", "R", "Schroeder")

document.body.innerHTML = greeter(user);