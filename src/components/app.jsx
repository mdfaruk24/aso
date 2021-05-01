import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import Header from './common/headers/header';
import HeaderTwo from './common/headers/header-two';
import HeaderThree from './common/headers/header-three';

import Footer from "./common/footers/footer";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-three";

// ThemeSettings
import ThemeSettings from "./common/theme-settings"



class App extends Component {

    render() {
        return (
            <div>
                <Header logoName={'logo.png'}/>
                {this.props.children}
                <Footer logoName={'logo.png'}/>

                <ThemeSettings />

            </div>
        );
    }
}

export default withTranslate(App);
