/*import React from 'react';
import './App.css';

class App extends React.Component {
    // code creeert een nieuwe anonieme klasse door uitbreiding van de React.Component klasse.
    constructor(props) {
        // het defieneren van een constructor
        super(props);
        this.state = {
            // het declareren van de oorspronkelijke state
            isLightOn: true
        };

        this.handleClick = this.handleClick.bind(this);
        // onClick handler wordt overgedragen aan een button element welke dus geen mogelijkheid heeft om een .setState methode aan te roepen. Om dit op te lossen dien je dus het bind methode gebruiken.
    }

    handleClick() {
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.handleClick}
            >
                {this.state.isLightOn ? 'AAN' : 'UIT'}
            </button>
        );
    }
}


export default App;*/


import React from 'react';
import './App.css';

function App() {
    const [isLightOn, toggleIsLightOn] = React.useState(true);

    function handleClick() {
        toggleIsLightOn(!isLightOn);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {isLightOn ? 'AAN' : 'UIT'}
        </button>
    );
}

export default App;