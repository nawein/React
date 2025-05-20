import React from "react";
import ReactDOM from "react-dom/client";

// JSX(transpiled befor it reaches the JS engine) - parcel-babel

// JSX => babel transpiles it to React.createElement => ReactElement(JS object) => HTMLElement(Render)

// React Element
const Header = React.createElement('h2', { id: "header" }, "Hello World from React"); 

// React functional Component
const Title = () => (<h1 className="head" 
tabIndex="1">Hello world from React</h1>)
console.log(Title)

// React functional Component
const HeadngComponet = () => (
     <div id="container">
         <Title />
         <h1 className="head">Return jsx React </h1>
     </div>
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadngComponet />);