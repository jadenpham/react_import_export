//importing react from react library
import React from 'react';

//importing title function from title.js, can drop .js file extension
import Title from './Title';

const App = (props) =>{
    return (
        <div>
            <h1>Here's our Fancy App.</h1>
            <p>Hey pretty dope!</p>
            <Title />
            <Title />
            <Title />
        </div>
    );
}

export default App;