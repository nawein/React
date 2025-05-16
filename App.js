import React from "react";
import ReactDOM from "react-dom/client";
const parentElement = React.createElement('div', { id: "header" }, 
    [React.createElement('div', { id: "child" },[
    React.createElement('h1', {}, 'React Learning.😍'),
    React.createElement('h2', {}, 'React Element h2 is rendering in Browser')]),
    React.createElement('div', { id: "child2" },[
    React.createElement('h1', {}, 'React Element2 is rendering in Browser'),
    React.createElement('h2', {}, 'React Element h2 is rendering in Browser')])
    ])


const header = React.createElement('h2', { id: "header" }, "Hello World from React");
console.log(parentElement)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentElement);