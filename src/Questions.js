const Questions = {
  js_basics: [
    { q: 'Comments in javascript', a: 'one line - //   multiple lines - /*  */', tag: 0 },
    { q: 'What is a varible?', a: 'Variable is container for a value', tag: 0 },
    { q: 'Var, let and const', a: "VAR: function scoped, can be re-declared in the same scope ------- LET: block & function scoped, cannot be re-declared in the same scope ----------------- CONST: block scoped, cannot be updated, not initialized", tag: 0 },
    { q: 'Complex operators', a: '**, %,  ++, --, +=, -=, *=, /=, %=, **=', tag: 0 },
    { q: 'Explain this keyword', a: 'Refers to the object it belongs to. If called with argument from another object, will refer to that other object.  In arrow function will always refer to the object which owns the function.', tag: 0 },
  ],
  js_exam: [
    { q: 'Explain why JS is an interpreted language', a: 'An interpreter reads each line and runs it. JustInTime compilation: compilation is done during the execution. In contrast C++ etc. first compile the entire program before running it', tag: 0 },
    { q: '', a: '', tag: 0 },
  ],
  js_other: [
    { q: 'Transform translate', a: '', tag: 0 },
    { q: '', a: '', tag: 0 },
    { q: 'Arrow function. Example of 1 line arrow function', a: 'a = () => {  return "Hello"; }  a = () => "Hello";', tag: 0 },
    { q: 'Example of if statement', a: 'if (condition1) { code1  } else if (condition2) { code2 } else { code3 }', tag: 0 },
    { q: 'Example of switch statement with default', a: 'switch (new Date().getDay()) { case 0:  test = "Sunday";  break;    case 1:  test = "Monday";  break;  default:  text = "Not Sunday not Monday"}', tag: 0 },
    { q: 'Example of For loop', a: 'let cars = ["BMW", "Fiat", "Ford", "Mazda"]; let text = "";   for ( let i = 0; i < 4; i ++) { text += cars[i] + "<br>"; }  document. getElementById ("demo"). innerHTML = text;', tag: 0 },
    { q: 'For in objects and in arrays', a: 'IN OBJECT: let person = { fname: "John", lname: "Dou", age: 25 }; OR IN ARRAY: let person = [45, 4, 9, 16, 25]  let text = ""; let x;   for (x in person) {  text += person[x];  } document. getElementById ("test").innerHTML = text;', tag: 0 },
    { q: 'Explain split and join, what is the syntax', a: 'Join converts array into string, split does the opposite. arr.join(" "), str.split(" ")', tag: 0 },
    { q: 'Define simple class with properies and methods', a: 'class Test = {}', tag: 0 },
  ],
};

export default Questions;
