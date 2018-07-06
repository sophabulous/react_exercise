import React, { Component } from 'react';
import BannerSection from './components/BannerSection';
import SimpleSection from './components/SimpleSection';
import BigTextSection from './components/BigTextSection';
import PicTextSection from './components/PicTextSection';
import FormSection from './components/FormSection';
import FooterSection from './components/FooterSection';

class App extends Component {
    
    render () {
        return (
            <div className="container">
                <BannerSection />
                <SimpleSection />
                <BigTextSection />
                <PicTextSection />
                <FormSection />
                <FooterSection />
            </div>
        );
    }
}

export default App;