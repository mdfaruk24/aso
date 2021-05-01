import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class TopBarDark extends Component {

    render() {
        const {translate} = this.props;
        return (
            <div className="top-header top-header-dark3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>Welcome to Our store Aura</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>{translate('call_us')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist"><a href="#"><i className="fa fa-heart"
                                                                               aria-hidden="true"></i> wishlist</a></li>
                                <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> My Account
                                    <ul className="onhover-show-div">
                                        <li>
                                            <a href="#" data-lng="en">
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-lng="es">
                                                Register
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(TopBarDark);