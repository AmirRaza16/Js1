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
let Username = '';
const body = document.querySelector('body');
body.style.backgroundImage = 'url("https://picsum.photos/1200/720")';
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';

body.onload = () =>{
    // Username = prompt('Please enter your name.');
    body.innerHTML = `<h1></h1><button id="btn">Refresh !</button><p></p>`;
    const h1 = document.querySelector('h1');
    h1.innerText = `Hello There!`;
    h1.style.display = 'flex';
    h1.style.justifyContent = 'center';
    h1.style.alignItems = 'center';
    h1.style.marginTop = '200px';
    h1.style.color = 'rgb(226, 226, 226)';
    h1.style.fontSize = '50px';
    h1.style.textAlign = 'center'; 
    h1.style.fontFamily = 'Arial';
    h1.style.fontWeight = 'bold';
    h1.style.textShadow = '10px 10px 10px black';
    h1.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

    const btn = document.querySelector('#btn');
    btn.style.display = 'flex';
    btn.style.justifyContent = 'center';
    btn.style.justifySelf = 'center';
    btn.style.alignItems = 'center';
    btn.style.marginTop = '20px';
    btn.style.backgroundColor = 'black';
    btn.style.border = '2px solid white';
    btn.style.color = 'white';
    btn.style.padding = '10px 32px';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';
    btn.setAttribute("type", "button");

    btn.addEventListener('mouseover', function(){
        btn.style.backgroundColor = 'white';
        btn.style.border = '2px solid black';
        btn.style.color = 'black';
    });

    btn.addEventListener('mouseout', function(){
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    });

    btn.addEventListener('click', function(){
        window.location.reload();
    });

    const p = document.querySelector('p');
    p.innerText = `This web page is powered by JavaScript.`;
    p.style.display = 'flex';
    p.style.justifySelf = 'center';
    // p.style.alignItems = 'center';
};