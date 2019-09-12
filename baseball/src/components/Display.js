import React from 'react';
import {pitch, balls} from './Dashboard';

function Display({pitch, balls}){
return (
    <div>
        <h1>Display</h1>
        <p>strikes: {pitch} </p>
        <p>balls: {balls}</p>
    </div>
)
}
export default Display;