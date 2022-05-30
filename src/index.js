import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){
    return(
        <div>
        <h1 style={{textAlign:"center"}}>Hello World</h1>
        <button class="button">Heyy</button>
        <p>My React App</p>
        </div>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));