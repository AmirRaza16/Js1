// console.log('Hello, world!');
// const jsobj ={
//     name: "Amir Raza",
//     age: 27,
//     married: false,
//     greet: function(){
//         return(`Hello, ${this.name}`);
//     }
// }
// console.log(jsobj.greet);
// console.log(jsobj.greet());


// console.log(document);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);
// console.log(document.body.innerHTML = '<h1>Hello, Amir Raza</h1>');
const body = document.querySelector('body');
console.log(body);
body.style.backgroundImage = 'url("https://picsum.photos/1200/720")';
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';

const h1 = document.querySelector('h1');
h1.style.display = 'flex';
h1.style.justifyContent = 'center';
h1.style.alignItems = 'center';
h1.style.marginTop = '200px';
h1.style.color = 'white';
h1.style.fontSize = '50px';
h1.style.textAlign = 'center'; 
h1.style.fontFamily = 'Arial';
h1.style.fontWeight = 'bold';
h1.style.textShadow = '12px 12px 12px black';
h1.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';