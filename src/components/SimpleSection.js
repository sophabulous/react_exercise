import React, { Component } from 'react';
import data from '../data.json';

class SimpleSection extends Component {
    render () {
        return (
            <div className="simple-section-container">
                { data.simpleSections.map((simpleSection) =>
                    <div className="simpleSection">
                        <div className="sectionLogoContainer">
                            <i className={simpleSection.sectionLogoURL}></i>
                        </div>
                        <h2>{simpleSection.sectionTitle}</h2>
                        <h3>{simpleSection.sectionHeading}</h3>
                        <p>{simpleSection.sectionBody}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default SimpleSection;