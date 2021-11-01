import {choice, remove} from "./helpers"
import fruits from "./foods"; 


let fruit = choice(fruits);
console.log(`I'd like on ${fruit}, please.`);
console.log(`Here you go ${fruit}.`);
console.log("Delicious May I have another?");
let remaining = remove(fruits, fruit);
console.log(`I am sorry, we are all out.  We have ${remaining.length} other foods left.`);

/* React Convensions
1)
    Each react component goes in seperate file
    EX: src/Car.s for Car component

2)
    Files and Components should be capitalized

3)
    It's better to impot React component instaed of extending React.Component
    EX 
    import React, {Component} from 'react';
    class App extends Component{

    }

4) 
    Export components by default
    EX export default App;

5)  
    Keep top level component called App in App.js file
    Create react skeleton assumes there is an App component

6) 
    Make CSS file same name as component
    EX House.css for House component

7)  Conventional to add className="House" onto top level component then
    <p className="House-title"...
    <p className"House-address"...
    don't do img{} do .dog-img{} use classes instead of making things general

8)  To import css -> import './Dog.css'

9)  Store images in src/folder with the components
*/
