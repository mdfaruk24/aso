import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
/* import TopCollection from './top-collection';
import SpecialProducts from "../common/products";
import BlogSection from "../common/blogsection";
import Instagram from "../common/instagram"; */
import LogoBlock from "../common/logo-block";
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script";
import MobiHomeCat from './mobi-home-cat';
import CollectionBanner from './collection-banner';





class Home extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `#` );
    }

	render() {

		return (
			<div>
                <Helmet>
                    <title>Aura | Fashion Store</title>
                    <meta name="description" content="Aura – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Aura Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*HomeCat Section Start*/}
                    <MobiHomeCat />
                {/*HomeCat Section End*/}

                {/*Home Slider*/}
                <section className="p-0">
                    <Slider  className="slide-1 home-slider">
                        <div>
                            <div className="home home2 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>women fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home1 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>men fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home3 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>Kids fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </section>
                {/*Home Section End*/}
                <CollectionBanner/>
                {/*collection banner*/}
                <section className="p-0">
                    <div className="container">
                        <div className="row partition2">
                            <div className="col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/category`}>
                                    <div className="collection-banner p-right text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner1.jpg`} className="img-fluid" alt=""/>
                                            <div className="contain-banner">
                                                <div>
                                                    <h4>save 30%</h4>
                                                    <h2>men</h2>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/category`}>
                                    <div className="collection-banner p-right text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} className="img-fluid" alt=""/>
                                            <div className="contain-banner">
                                                <div>
                                                    <h4>save 60%</h4>
                                                    <h2>women</h2>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner end*/}

                {/* <TopCollection type={'women'} /> */}

                {/*Parallax banner*/}
                <section className="pb-0">
                    <div className="full-banner parallax-banner2 parallax text-center p-left">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className="banner-contain">
                                        <h2>2021</h2>
                                        <h3>fashion trends</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="banner-contain">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/parallax/1.jpg`} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner End*/}

                {/* <SpecialProducts /> */}

                {/* Banner */}
                <div className="title1 p-5">
                    <h4>SHOP BY CATEGORY</h4>
                    <h2>top collection</h2>
                </div>
                <section className="p-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="img-part">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/1.jpg`} alt=""
                                            className="img-fluid blur-up lazyload bg-img"/>
                                    </div>
                                    <div className="titleWrap">
                                        <h2>top collection</h2>
                                        <h4>Shop by Category</h4>
                                        <Link to={`${process.env.PUBLIC_URL}/men`} type="button" class="btn btn-outline-dark" activeClassName="active">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="img-part">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/2.jpg`} alt=""
                                            className="img-fluid blur-up lazyload bg-img"/>
                                    </div>
                                    <div className="titleWrap">
                                        <h2>WEEKEND COLLECTIVE</h2>
                                        <h4>Keeping it casj</h4>
                                        <Link to={`${process.env.PUBLIC_URL}/men`} type="button" class="btn btn-outline-dark" activeClassName="active">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="img-part">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/3.jpg`} alt=""
                                            className="img-fluid blur-up lazyload bg-img"/>
                                    </div>
                                    <div className="titleWrap">
                                        <h2>RECLAIMED VINTAGE</h2>
                                        <h4>Throwback vibes</h4>
                                        <Link to={`${process.env.PUBLIC_URL}/men`} type="button" class="btn btn-outline-dark" activeClassName="active">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                {/*logo section*/}
                <div className="title1 pt-5 p-3">
                    <h2>TRENDING BRANDS</h2>
                </div>
                <LogoBlock />
                {/*logo section end*/}

                {/*service layout*/}
                <div className="container">
                    <section className="service border-section small-section ">
                        <div className="row">
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                    <div className="media-body">
                                        <h4>Fastest Delivery</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                    <div className="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                    <div className="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


			</div>
			)


	}
}

export default Home;