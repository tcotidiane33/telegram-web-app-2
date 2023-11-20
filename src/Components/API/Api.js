import { render } from '@testing-library/react';
import React, { Component } from 'react';


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
class Api extends Component {
   render() {
    return (
        <div>
            <h1>Voici votre <strong>URL</strong> de paiement !</h1>
        </div>
    );
   }
};

export default Api;