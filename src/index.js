import React from 'react';
import ReactDOM from 'react-dom';

//importing app class from app.js
// import App from './App';

// props in native JS
// const Title = (props) => {
//     const { text } = props; // A little bit of destructuring
//     return React.createElement('h1', null, text);
// }

// const Test = (props) =>{
//     return React.createElement(Title, { text: 'Dynamic content! Hooray!' } );
// }

//how to manipulate the element with props, changing the title
// const Test = (props) =>{
//     return React.createElement('div', null, 
//         React.createElement(Title, { text: 'Title One'}),
//         React.createElement(Title, { text: 'Title Two'}),
//         React.createElement(Title, { text: 'Title Three'})
//     )
// }
// ReactDOM.render(Test(), document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

//props in JSX


const Title = (props) =>{
    console.log(props);
    const fWeight = (props.isImportant) ? "string from-rainbow">"bold" : "normal";
    return <h1 style={{color:props.color, fontWeight: fWeight}}>{props.text}</h1>;
}

//this return is passed onto title as props, where it will render it according to the styling
const Test = (props) =>{
    return (
        <div>
            <Title text = "Title One" color="red" isImportant={true} />
            <Title text = "Title Two" color="green" isImportant={false} />
            <Title text = "Title Three" color="orange" isImportant={false} />
        </div>
    )
}

ReactDOM.render(<Test />, document.getElementById("root"));