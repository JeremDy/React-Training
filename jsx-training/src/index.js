// Import the React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';


// Create a react component

const App = () =>(
    <div>
        <label className="label" htmlFor="name">
            Enter name :
        </label> 
        <input id="name" type="text" />
        <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
    </div>
)





// Take the react component and show it on the screen

ReactDom.render(
    <App />,
    document.getElementById('root'),  
);
