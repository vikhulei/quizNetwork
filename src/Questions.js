const Questions = {
  js_basics_var: [
    { q: 'Comments in javascript', a: 'one line - //   multiple lines - /*  */', tag: 0 },
    { q: 'Advantages of JavaScript', a: "1) Large community;<br>2) Multiple frameworks and libraries;<br>3) No expensive tools;<br>4) Support from Google, Facebook, Mozila and others", tag: 0 },
    { q: 'Disadvantages of JavaScript', a: `1) Browser limits - cannot access local files;<br>2) Code not compiled everyone can see it`, tag: 0 },
    { q: 'Variables cannot start with', a: 'A number', tag: 0 },
    { q: 'What is program block?', a: 'independent set of instructions, separated with curly braces.', tag: 0 },
    { q: '', a: '', tag: 0 },
    { q: '', a: '', tag: 0 },
    { q: '', a: '', tag: 0 },
    { q: 'What is a DOM?', a: 'Document Object Model, it is a structural representation of the document', tag: 0 },
    { q: 'What is ECMA?', a: 'European Association for standartizing information. ECMA Script is standartized JavaScript', tag: 0 },
    { q: 'Where JavaScrip has borrowed its syntax from?', a: 'Java, C, C++', tag: 0 },
    { q: 'What does it mean just-in-time compilation', a: 'Compilation during execution of a program', tag: 0 },
    { q: 'Explain why JS is an interpreted language', a: 'An interpreter reads each line and runs it. JustInTime compilation: compilation is done during the execution. In contrast C++ etc. first compile the entire program before running it', tag: 0 },
    { q: 'What is a varible?', a: 'Variable is an address/name to a storage location in memory', tag: 0 },
    { q: 'Var, let and const', a: "VAR: function scoped, can be re-declared in the same scope<br>LET: block & function scoped, cannot be re-declared in the same scope<br>CONST: block scoped, cannot be updated, not initialized", tag: 0 },
    { q: 'Complex operators', a: '**, %,  ++, --, +=, -=, *=, /=, %=, **=', tag: 0 },
    { q: 'Explain this keyword', a: 'Refers to the object it belongs to. If called with argument from another object, will refer to that other object.  In arrow function will always refer to the object which owns the function.', tag: 0 },
  ],
    js_data_types: [
    { q: 'List seven data types', a: 'String<br>Number<br>Boolean<br>BigInt<br>undefined<br>null<br>Symbol', tag: 0 },
    { q: 'Why primitive types have methods?', a: 'Because of autoboxing - converting primitive to object on the fly, then destroying it', tag: 0 },
    { q: 'String methods', a: 'length<br>slice<br>replace - all and case insensitive<br>toUpperCase<br>concat<br>charAt<br>', tag: 0 },
      ],
  js_general: [
    { q: 'What are popular online development environments?', a: 'JSFiddle, CodePen, Codesandbox, JSBin, Plunker', tag: 0 },
    { q: 'What are three main elements of local development environment?', a: '1) Code editor (VS Code, Sublime Trxt, Notepad++)<br>2) Interpreter (Chrome, Firefox)<br>3) Debugger (Chrome develper tools)', tag: 0 },
    { q: 'What other tools are needed for development?', a: '1) package manager (npm, yarn)<br>2) module bundlers (Grunt, Webpack)<br>3) testing frameworks(Mocha, Jasmine, Jest)<br>4) security analyzers', tag: 0 },
    { q: '', a: '', tag: 0 },
    { q: '', a: '', tag: 0 },
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
