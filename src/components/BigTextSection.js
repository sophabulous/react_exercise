import React, { Component } from 'react';
import data from '../data.json';

class BigTextSection extends Component {
    render () {      
        return (
            <div className="bigText">
                <h2>{data.bigText}</h2>
            </div>
        );
    }
}

export default BigTextSection;
        