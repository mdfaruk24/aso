import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { left: '0px' }
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { left: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { left: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { left: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { left: '-410px' } })
    }
//1199
    onMouseEnterHandler() {
        if (window.innerWidth > 768) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-left">
                                    <i className="fa fa-angle-left pl-2" aria-hidden="true"></i>
                                    <span > Back</span>
                                </div>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link">
                                    {translate('whatsnew')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link">
                                    {translate('women')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link">
                                    {translate('men')}
                                </Link>
                            </li>
                            
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link">
                                    {translate('kids')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link" >
                                    {translate('beauty')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link" >
                                    {translate('jewellery')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link" >
                                    {translate('accessories')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link" >
                                    {translate('decor')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link" >
                                    {translate('wedding')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/category`} className="nav-link" >
                                    {translate('footwear')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(NavBar);