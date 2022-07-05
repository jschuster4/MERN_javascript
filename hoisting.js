// console.log(hello);                                   
// var hello = 'world';         
// will hoist hello to top and output undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// RULES FOR HOISTING: 

// variable declarations are hoisted to the top of their scope

// functions are hoisted to the top of their scope
// functions act like a cage, so no declarations are hoisted out of them 

// assingments such as = act like anchors, they stay put no matter how it is rearranged
// let and const are also hoisted similar to var, but they are not initialized with a default value (var in initialized to undefined)






