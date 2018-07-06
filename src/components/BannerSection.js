import React, { Component } from 'react';
import data from '../data.json';

class BannerSection extends Component {
    render () {
        return (
            <header className="banner-section-container">
                <img src={data.bannerImgURL} />
                <div className="bannerContent">
                    <div className="logoContainer">
                        <img src={data.siteLogoURL} alt="" />
                    </div>
                    <h6>{data.introduction}</h6>
                    <h1>{data.siteName}</h1>
                    <div className="socialMediaIconRow">
                        <i className="fa fa-envelope"></i>
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="desktopBannerTextSection">
                        <h3>{data.enticingStatement}</h3>
                        <p>{data.bannerText}</p>
                        <div className="appStoreSigns">
                            {data.appStoreSigns.map((signURL) =>
                                <div className="appStoreSign">
                                    <img src={signURL} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default BannerSection;
