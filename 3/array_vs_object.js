// https://medium.freecodecamp.org/javascript-arrays-and-objects-are-just-like-books-and-newspapers-6e1cbd8a1746


let arr = [];
let obj = {};

arr[0] = 'first';
obj[0] = 'first';

arr['1'] = 'second';
obj['1'] = 'second';

arr.two = 'third';
obj.two = 'third';

// console.log(arr[0]);
// console.log(arr['0']);
// console.log(arr[1]);
// console.log(arr['1']);
// console.log(arr.two);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// console.log(obj[0]);
// console.log(obj['0']);
// console.log(obj[1]);
// console.log(obj['1']);
// console.log(obj.two);

for (var i = 0; i < arr.length; i++) {
    console.log(obj[i]);
    console.log(obj.i);
}
