const students =require('./studentController');
const {add,update,remove,display}=students;
let newStudent={
    names:"rayna",
    age:20,
    sex:"female"
};
add(newStudent);
//one items//
update(2, "age", 40);
update(2, "names", "allen");
remove(3);
display();