const{student}=require('./students');
let add=(item)=>{
    item.id=student.length+1;
    student.push(item);
console.log("student added");    
}
//updatig//
const update = (id, key, value) => {
    console.log("\n2. UPDATING");
    console.log("\nItem before updating:");
    var exist={};
    exists = student.find(Element=>Element.id === id);
    console.log(exists);
    if(!exist){
        console.log("there is no such student");
    }else{
        exists[key] = value;
        if(key === "names" || key === "age" || key=== "sex"){
        }
        console.log("\nItem updated!");
        console.log("\nItem after updating:");
        console.log(exists);
    }
}
    const remove = (id) => {
        console.log("\n4. REMOVE ------------------------------------------------------ ")
        
        var exists = {};
        // Add code bellow to find the item to be deleted.
        exists = student.find(Element=>Element.id === id);
        console.log(exists);
        
    
        if (!exists) {
            // Add code to print a message is no item is found.
            console.log("No such item");
            
        } else {
            var remainingItems = [];
            // Write the code to remove the choosen item in the bellow this line.
            remainingItems = student.filter(Element=>Element.id !== id);
            console.log(`\nItem with id: ${id} is removed successfully!!`);
            console.log("\nRemainig Items:");
            console.log(remainingItems);
        }
    }
    const display = () => {

        console.log("\n5. DISPLAY ------------------------------------------------------ ")
        
        console.log("\nItems in students:\n");
        console.log(student);
    }


module.exports={
    add,
    update,
    remove,
    display,
}
