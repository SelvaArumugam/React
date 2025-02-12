import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
    <h1>I am compositing</h1>
);
const Compositer = () => (
    <div>
        <Header/>
        <h2>I have composited the above line</h2>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(<Compositer/>);