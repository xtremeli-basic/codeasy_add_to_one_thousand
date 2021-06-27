//Declarations
var set1 = new Set();
var i;
var j;

//Loop
for(i = 1; i <= 1000; i++){
    if(i+i == 1000){
       set1.add(i);
    }
}
//result
console.log(set1.values());

//A set is  a collection of items which are unique ( it has no repeated elements)

//This answer can also be achieved using arrays instead of tests but for the purpose of practice a set was being used have been used

//Uncomment the code below here and comment the code above this line to use arrays

/*
//Declarations
var array = [];
var i;
var j;

//Loop
for(i = 1; i <= 1000; i++){
    if(i+i == 1000){
       array.push(i);
    }
}
//result
console.log(array);
*/
