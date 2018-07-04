import React, { Component } from 'react';

class BannerSection extends Component {
    render () {
    return (
        <img src={{bannerImgURL}} />
        <div class="bannerContent">
            <div class="logoContainer">
                <img src={{siteLogoURL}} />
            </div>
            <h6>{{introduction}}</h6>
            <h1>{{siteName}}</h1>
            <div class="socialMediaIconRow">
                <i class="fa fa-envelope"></i>
                <i class="fa fa-facebook-f"></i>
                <i class="fa fa-twitter"></i>
            </div>
            <div class="desktopBannerTextSection">
                <h3>{{enticingStatement}}</h3>
                <p>{{bannerText}}</p>
                <div class="appStoreSigns">
                    {{#each appStoreSigns}}
                        <div class="appStoreSign">
                            <img src={{this}}>
                        </div>
                    {{/each}}
                </div>
            </div>
        </div>

        );
    }
}

export default BannerSection;
