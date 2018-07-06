import React, { Component } from 'react';
import data from '../data.json';

class PicTextSection extends Component {
    render () {
        return (
            <div className="pic-text-section-container">
                <h2 className="picTextSectionHeading">{data.picTextSectionHeading}</h2>
                {data.picTextSections.map((picTextSection) =>
                    <div className="picTextSection">
                        <div className="sectionLogoContainer">
                            <i className={picTextSection.sectionLogoURL}></i>
                        </div>
                        <div className="picTextMidSection">
                            <h2>{picTextSection.sectionHeading}</h2>
                            <p>{picTextSection.sectionBody}</p>
                        </div>
                        <div className="demoPicContainer">
                            <img src={picTextSection.pictureURL} alt="" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default PicTextSection;