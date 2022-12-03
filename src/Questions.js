const Questions = {
  js_tasks: [
    { q: 'FizzBuzz', a: 'for(i>=100) switch(true) case(i%3===0 && i%5===0): console.log ("FizzBuzz")', tag: 0 },
    { q: 'Fibonacci', a: 'first=0 second=1 forloop: third= first+second c.l.(third) first=second second=third', tag: 0 },
    { q: 'Assign function to a button', a: 'document .getElementById ("btn") .addEventListener ("click", myFunction)', tag: 0 },
    { q: 'Change 1st element of array to "start" and last element to "end"', a: 'array[0]= "start" array[array.length -1] = "end"', tag: 0 },
    { q: 'Combine 2 arrays and show only numeric values', a: '[...arr1, ...arr2]. filter(val => typeof(val) === "number"', tag: 0 },
    { q: 'Return longest login from the array', a: 'arr. reduce((a,b) => a.length>b.length ? a : b)', tag: 0 },
    { q: 'First parameter is array, second - factorial function, which processes each element of an array', a: '', tag: 0 },
    { q: 'Check age function: not set, negative, not numeric, not integer, under 18, all correct, verification message', a: '', tag: 0 },
    { q: 'First parameter is array, second - number, third - "greater"/"less"', a: '', tag: 0 },
    { q: '0', a: '', tag: 0 },
    { q: 'check if the number is integer', a: 'number - Math.floor(number) === 0  OR Number.isInteger (number)', tag: 0 },
    { q: 'check if a contains b', a: 'a.includes(b)  OR a.indexOf(b) !== -1', tag: 0 },
    { q: 'round number to second digit', a: 'Math.round(number*100) /100 OR number.toFixed(s)', tag: 0 },
  ],
  js_theory: [
    { q: 'Comments', a: 'one line - //   multiple lines - /*  */', tag: 0 },
    { q: 'Varibles', a: 'var - function scoped, can be re-declared, initialized and undefined   let - block scoped, can be updated, not re-declared, not initialized   const -  block scoped, cannot be updated, not initialized', tag: 0 },
    { q: 'Complex operators', a: '**, %,  ++, --, +=, -=, *=, /=, %=, **=', tag: 0 },
    { q: 'Define simple class with properies and methods', a: 'class Test', tag: 0 },
    { q: 'Explain this keyword', a: 'Refers to the object it belongs to. If called with argument from another object, will refer to that other object.  In arrow function will always refer to the object which owns the function.', tag: 0 },
    { q: 'Arrow function. Example of 1 line arrow function', a: 'a = () => {  return "Hello"; }  a = () => "Hello";', tag: 0 },
    { q: 'Example of if statement', a: 'if (condition1) { code1  } else if (condition2) { code2 } else { code3 }', tag: 0 },
    { q: 'Example of switch statement with default', a: 'switch (new Date().getDay()) { case 0:  test = "Sunday";  break;    case 1:  test = "Monday";  break;  default:  text = "Not Sunday not Monday"}', tag: 0 },
    { q: 'Example of For loop', a: 'let cars = ["BMW", "Fiat", "Ford", "Mazda"]; let text = "";   for ( let i = 0; i < 4; i ++) { text += cars[i] + "<br>"; }  document. getElementById ("demo"). innerHTML = text;', tag: 0 },
    { q: 'For in objects and in arrays', a: 'IN OBJECT: let person = { fname: "John", lname: "Dou", age: 25 }; OR IN ARRAY: let person = [45, 4, 9, 16, 25]  let text = ""; let x;   for (x in person) {  text += person[x];  } document. getElementById ("test").innerHTML = text;', tag: 0 },
    { q: 'Explain split and join, what is the syntax', a: 'Join converts array into string, split does the opposite. arr.join(" "), str.split(" ")', tag: 0 },
    { q: 'Transform translate', a: '', tag: 0 },
    { q: '', a: '', tag: 0 },
  ],


  html: [
	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML is used for:', a: 'HTML is used create and display pages on the WEB', tag: 0},

	{q: 'Tags, elements, attributes', a: 'Tags: <p><p/>,        Element: <p>hi</p>       Attr.: <img src={dog} /> ', tag: 0},

	{q: 'Block, inline and inline-block', a: 'B: next line,     I: same line,    I-B: height, width, margins, padding', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},

	{q: 'HTML abbreviation', a: 'Hyper Text Markup Language', tag: 0},



],


  html_old: [
    { q: 'Defines an area inside an image map', a: '<map name="workmap"> <area shape="rect" coords="34,44,270, 350" alt="Computer" href="computer.htm">   <area shape="circle" coords="337,300,300" alt="Cup of coffee" href="coffee.htm"> </map>', tag: 0 },

    { q: 'Defines embedded sound content', a: '<audio controls>   <source src="horse.mp3" type="audio/mpeg"> Your browser does not support the audio tag. </audio>', tag: 0 },

    { q: 'Specifies the base URL or target for all relative URLs in a document', a: '<head>   <base href="https:// www. w3schools.com/" target="_blank"> </head>', tag: 0 },

    { q: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)', a: '<canvas id="myCanvas"> Your browser does not support the canvas tag. </canvas>', tag: 0 },

    { q: 'Table: caption, header, body, footer, rows and columns', a: '<table></table><caption></caption> <thead></thead>   <tbody></tbody>  <tfooter></tfooter>   <tr>   <th></th>   </tr>   <tr>   <td></td>   </tr>', tag: 0 },

    { q: 'Specifies a group of one or more columns in a table for formatting', a: '<table>   <colgroup>    <col span="2" style="background-color:red">    <col style="background-color:yellow">  </colgroup>', tag: 0 },

    { q: 'List of pre-defined options for input control, although user may enter his text', a: '<label for= "browser"> Choose your browser from the list: </label>   <input list= "browsers" name="browser" id="browser"> <datalist id= "browsers"> <option value="Edge"> <option value="Firefox"> </datalist>', tag: 0 },

    { q: 'Specify details that the user can open and close on demand', a: '<details>  <summary>Center </summary>  <p>Lorum</p>   </details>', tag: 0 },

    { q: 'Write a code for a description list', a: '<dl>    <dt>Coffee</dt>     <dd>morning dring</dd>     <dt>Milk</dt>    <dd>evening drink</dd>     </dl>', tag: 0 },

    { q: 'List of pre-defined options for input control and user must choose one of the predifined options', a: '<label for="opt"> </label> <select name="opt">        <option>option1 </option> <option>option2 </option> <select>', tag: 0 },

    { q: 'List 15 types of input in the form', a: '<form autocomplete= "off"> <label for="1"> One</label> <input type="text", "button", "checkbox", "date", "email", "file", "number", "password", "radio", "range", "reset", "submit", "search", "tel", "url"> </form>', tag: 0 },

    { q: '14 attributes for input field in the form', a: 'required, value, readonly, disabled, size, maxlength, min and max, multiple (file and email), placeholder, step, autofocus, list, autocomplete', tag: 0 },

    { q: 'How to place web-page inside a web-page and target it with a link', a: '<iframe src="" title="title" width="300" height="400" name="aaa"> </iframe>      <a href="https:/.." target="aaa">Click </a>', tag: 0 },

    { q: '7 most used semantic elements', a: 'article, aside, footer, header, main, nav, section', tag: 0 },

    { q: 'Draw svg circle and rectangle. What is the format?', a: '<svg width="100" height="100"> <circle cx="50" cy="50" r="40" stroke="green" stroke-width="3" fill="yellow">   </svg>     <svg width="500" height="200">   <rect width="500" height="200" …>    </svg>  XML', tag: 0 },

    { q: 'HTML syntax for canvas. What is the format?', a: '<canvas id="myCanvas" width="500"   height="200"></canvas>   jpg, bmp, png', tag: 0 },

    { q: 'Syntax for video with controls', a: '<video width="500" height="300" controls>   <source src="movie.mp4" type="video/mp4">      </video>', tag: 0 },

    { q: 'Syntax for audio with controls', a: '<audio controls>        <source src="sound.mp3" type="audio/mpeg"> Your browser does not support    </audio>', tag: 0 },
  ],


  css: [
    { q: 'What does background-attachment do - two parameters?', a: 'fixed and scroll', tag: 0 },
    { q: 'Explain box model', a: 'content-box: size will be applied to the content, border-box: size will be applied to the border', tag: 0 },
    { q: 'Define symbols of unordered lists', a: 'list-style-type', tag: 0 },
    { q: 'Difference in the inline-block?', a: 'width and height, margins and paddings can be set with inline-block', tag: 0 },
    { q: 'Center vertically and horizontally using absolute', a: 'position: absolute; transform: traslate(-50%, -50%); top: 50%; left: 50%', tag: 0 },
    { q: 'Four combinators and their meaning', a: 'space - all descendents (children, grandchildren etc); > - only children; +  one element directly after; ~  all elements after (even indirectly)', tag: 0 },
    { q: 'List 5 most used pseudo classes', a: 'anchor - link, visited, hover, active; hover; first-child; nth-of-type; checked', tag: 0 },
    { q: 'List 5 pseudo elements', a: 'after; before; first-line; first-letter; selection', tag: 0 },
    { q: 'Repeating linear gradient', a: 'background-image: repeating-linear-gradient(red, yellow, green)', tag: 0 },
    { q: 'Basic radial gradient', a: 'background-image: radial-gradient(red, green, yellow)', tag: 0 },
    { q: 'Two types of shadow, syntax', a: 'text-shadow, box shadow; text-shadow: 1px 1px 5px black', tag: 0 },
    { q: 'List transform methods', a: 'translate, rotate, scale, skew', tag: 0 },
    { q: 'Syntax for transition', a: 'transition: parameter duration timing-function delay;', tag: 0 },
    { q: 'Syntax for animation', a: ' @keyframes name { 0% {background-color: red;} 25% ... 50% … 75%… 100%...}   div {animation: name 5s linear 2s infinite; }', tag: 0 },
    { q: 'Object-fit properties', a: 'fill - stretches; contain - scales to proportions; cover - shows part of the image; scale-down; none', tag: 0 },
    { q: 'Methods for columns', a: 'column-count, column-gap, column-rule, column-width', tag: 0 },
    { q: 'Syntax for variables', a: ' --blue: #1e90ff; div { color: var(--blue)}', tag: 0 },
    { q: 'Syntax for media queries', a: ' @media screen and (min-width: 480px) { #div { color: blue; }}', tag: 0 },
    { q: 'vmin and vmax', a: 'vmin - vh or vw, whichever is smaller; vmax - vh or vw, whichever is larger', tag: 0 },
    { q: 'em, ram, %', a: 'em = font-size of current element; rem = font-size of root element; % of the parent element', tag: 0 },
    { q: 'Create grid with css', a: 'display: grid; grid-template-columns: repeat(2 1fr); grid-column-gap: 10px; grid-template-rows: 100px; grid-auto-rows: 90px;', tag: 0 },
    { q: 'Define grid area', a: 'div1 { grid-area: header;}    div2 {  grid-area: main; }   container { display: grid; grid-template-areas: "main header header" "main header header" }', tag: 0 }
  ],
  react: [
    { q: 'Function component', a: 'const App = () => { return ( <div>  </div> ) }', tag: 0 },
    { q: 'What should be installed for ROUTER?', a: '1) react -router 2) react -router -dom', tag: 0 },
    { q: 'Router imports', a: '{BrowserRouter, Switch, Route, Link, Redirect}', tag: 0 },
    { q: 'Syntax for Router Link', a: '<Link to= "/Home"> Home </Link> ', tag: 0 },
    { q: 'Syntax for Route', a: '<Switch> <Route path="/home" component ={Home} /> </Switch> ', tag: 0 },
    { q: 'Default Link in Router', a: '<Route exact path="/"> <Redirect to="/home" /> </Route> ', tag: 0 },
    { q: '', a: '', tag: 0 },
  ],
};

export default Questions;
