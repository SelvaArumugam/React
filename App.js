import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
/*
-Header
    -Logo
    -About us
    -contact us
    -cart
-Body
    -Restaurent Container
    - Restaurent Cards
        -Restaurent Name
        -Restaurent Photo
        -ETA
        -Rating
        -cuisine
-Footer
    -Copyrights
    -
*/


const App = () =>{
    return (
        <div>
            <Header></Header>
            <Body></Body>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(<App/>);