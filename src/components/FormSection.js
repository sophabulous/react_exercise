import React, { Component } from 'react';
import data from '../data.json';

class FormSection extends Component {
    render () {
        return (
            <div className="form-section-container">
                <form role="form">
                    <h2>{data.formHeading}</h2>
                    <p>{data.name}</p>
                    <input type="text"/>
                    <p>{data.emailAddress}</p>
                    <input type="email"/>
                    <p>{data.subject}</p>
                    <input type="text"/>
                    <p>{data.message}</p>
                    <textarea className="messageBox"></textarea>
                    <button className="submitBtn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default FormSection;