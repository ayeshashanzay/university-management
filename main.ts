

class Person {
    name:string;
    age:number

    getName(){}

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    rollNumber : number ;
    course : string[] = [] ;
    registerForCourse(co:Course){
        this.course.push(co.name)
    }
    constructor(name:string,age:number,rNo:number,){
        super(name,age)
        this.rollNumber = rNo
    }
    getListOfCource(){
        console.log(this.name + "Course: ");
         this.course.forEach(element => {
            console.log(element);
            
        })
    }
}

class Teacher extends Person {
    salery:number;
    course:string[]=[]
    assignCourse(co1:Course){
        this.course.push(co1.name)
    }
    getListOfteacher(){
        console.log(this.name + "Course: ");
         this.course.forEach(element => {
            console.log(element);
            
        })
    }
    constructor(name:string,age:number,salary:number,){
        super(name,age)
    this.salery = salary

    }
}

class Course {
    id:number;
    name:string;
    students:Student[]=[]
    teacher:Teacher[]=[]
    static allcourse:string[]=[]
    constructor(id:number,name:string){
        this.id = id
        this.name = name
        Course.allcourse.push(name);
    }
    addStudent(std:Student){
        this.students.push(std)
    }
    setInstructor(inst:Teacher){
        this.teacher.push(inst)
    }
    getListOfStudent(){
        console.log(this.name + "Students: ");
        
        this.students.forEach(element => {
            console.log(element.name);
            
        })
    }
    getListOfteacher(){
        console.log(this.name + "Teacher: ");
         this.teacher.forEach(element => {
            console.log(element.name + " " + element.age);
            
        })
    }
    static displayAllCourse(){
        console.log("All the courses");
        Course.allcourse.forEach(element => {
            console.log(element);
            
        })
        
    }
}

class Department{
    name:string;
    course:string[]=[]
    static alldepartment:string[]=[]
    addCourse(course:Course){
        this.course.push(course.name)
    }
    getCourse(){
        this.course.forEach(element => {
            console.log(element);
            
        })
    }
    constructor(name:string){
        this.name = name
    Department.alldepartment.push(this.name)
    }
    static displayAllDepartment(){
        console.log("All department are: ");
        Department.alldepartment.forEach(element =>{
            console.log(element);
        })
    }
}
 
let c1 = new Course(1,"Blockchain")
let c2 = new Course(2,"Typscript")
let c3 = new Course(3,"AI")

let t1 = new Teacher("Humza ",25,10000)
let t2 = new Teacher("Ameen ",26,10000)

c1.setInstructor(t1)
t1.assignCourse(c1)

c2.setInstructor(t1)
t1.assignCourse(c2)

c2.setInstructor(t2)
t2.assignCourse(c2)

t1.getListOfteacher()
t2.getListOfteacher()

let std1 = new Student("Ayesha ",14,1234)
let std2 = new Student("Misbah ",20,654)

c1.addStudent(std1)
std1.registerForCourse(c1)

c1.addStudent(std2)
std2.registerForCourse(c1)

c2.addStudent(std1)
std2.registerForCourse(c2)

std1.getListOfCource()
std2.getListOfCource()

Course.displayAllCourse()

let d1 = new Department("Computer Science")
let d2 = new Department("SE")

d1.addCourse(c1)
d2.addCourse(c2)

d2.addCourse(c1)

Department.displayAllDepartment()