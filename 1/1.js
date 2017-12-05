// https://medium.com/devschacht/daniel-li-not-everything-in-javascript-is-an-object-82fe5026e1a2

let a = Symbol("qaz");
console.log(typeof a);
console.log(a);


const str = "qqq";

const Str = new String("Qqq");

const b = new Number(32.345);
console.log(typeof b);
console.log(b);
console.log(b.toString());
b.bar = "baz";
console.log(b.bar); //"baz"

var c = 32.345;
console.log(typeof c);
console.log(c);
console.log(c.toString());
c.bar = "baz";
console.log(c.bar); //undefined

const answer = 42;
answer.foo = "bar";
console.log(answer.foo); // undefined

//----------------------------------------

// const foo = function (baz) {};
const foo = (baz) => {};
console.log(typeof foo);
foo.name; // "foo"
foo.length; // 1

foo.bar = "baz";
foo.bar; // "baz"


//----------------------------------------


// Примитивные типы
true instanceof Object; // false
null instanceof Object; // false
undefined instanceof Object; // false
0 instanceof Object; // false
'bar' instanceof Object; // false
// Непримитивные типы
const foo1 = function () {}
foo1 instanceof Object; // true
const arr = [];
arr instanceof Object; // true
const obj = {};
obj instanceof Object; // true

const foo2 = {};
foo2.bar = function () { console.log("baz"); };
foo2.bar(); // "baz"


//----------------------------------------

const Foo = function () {
	this.bar = "baz";
};
const qux = new Foo();
qux; // {}
qux instanceof Foo; // true
qux instanceof Object; // true

Foo(); // undefined
window.bar; // "baz"

///---------------------------------------

String(1337); // "1337"
String(true); // "true"
String(null); // "null"
String(undefined); // "undefined"
String(); // ""
String("dog") === "dog" // true
typeof String("dog"); // "string"

//--------------------------------------------


const pet = new String("dog")
typeof pet; // "object"
pet === "dog"; // false


const foo3 = "bar";
foo3.length; // 3
foo3 === "bar"; // true

const foo4 = 42;
foo4.bar = "baz"; // Присвоение, выполняемое на объекте-оболочке
foo4.bar; // undefined


const foo5 = null;
foo5.bar = "baz"; // Uncaught TypeError: Cannot set property 'bar' of null


// Итого
// Не все в JavaScript — объект
// В JavaScript 6 примитивных типов
// Все, что не является примитивным типом, является объектом
// Функции — особый тип объекта
// Функции могут использоваться для создания новых объектов
// Строки, булевые значения и числа могут быть представлены в качестве примитивных типов и в качестве объектов
// Определенные примитивные типы (строки, булевые значения, числа) ведут себя как объекты благодаря наличию в JavaScript автоупаковки.