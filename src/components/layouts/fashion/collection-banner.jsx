import React, { Component } from 'react';

import '../../common/index.scss';



class collectionBanner extends Component {


	render() {

		return (
            <div>
                {/*collectionBanner*/}
                <section className="banner-padding ratio2_1">
                    <div className="container">
                        <div className="row margin-default">
                            <div className="col-lg-3 d-lg-block d-none">
                                <div className="h-100">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/42.jpg`} className="img-fluid bg-img" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row margin-default">
                                    <div className="col-md-4 mb-30">
                                        <a href="#">
                                            <div className="collection-banner p-right text-end">
                                                <div className="img-part">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/46.jpg`} alt=""
                                                        className="img-fluid blur-up lazyload bg-img"/>
                                                </div>
                                                <div className="contain-banner banner-3">
                                                    <div>
                                                        <h4 className="text-dark">save 30%</h4>
                                                        <h2 className="text-dark">bag</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-30">
                                        <a href="#">
                                            <div className="collection-banner p-right text-end">
                                                <div className="img-part">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/45.jpg`} alt=""
                                                        className="img-fluid blur-up lazyload bg-img"/>
                                                </div>
                                                <div className="contain-banner banner-3">
                                                    <div>
                                                        <h4 className="text-dark">save 60%</h4>
                                                        <h2 className="text-dark">shoes</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-30">
                                        <a href="#">
                                            <div className="collection-banner p-right text-end">
                                                <div className="img-part">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/44.jpg`} alt=""
                                                        className="img-fluid blur-up lazyload bg-img"/>
                                                </div>
                                                <div className="contain-banner banner-3">
                                                    <div>
                                                        <h4 className="text-dark">save 30%</h4>
                                                        <h2 className="text-dark">watch</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <a href="#">
                                            <div className="collection-banner p-right text-end">
                                                <div className="img-part">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/47.jpg`} alt=""
                                                        className="img-fluid blur-up lazyload bg-img"/>
                                                </div>
                                                <div className="contain-banner banner-3">
                                                    <div>
                                                        <h4 className="text-dark">start from $25</h4>
                                                        <h2 className="text-dark">winter</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <a href="#">
                                            <div className="collection-banner p-right text-end">
                                                <div className="img-part">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/banner/43.jpg`} alt=""
                                                        className="img-fluid blur-up lazyload bg-img"/>
                                                </div>
                                                <div className="contain-banner banner-3">
                                                    <div>
                                                        <h4 className="text-dark">under $200</h4>
                                                        <h2 className="text-dark">denims</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collectionBanner End*/}
            </div>
            
			)


	}
}

export default collectionBanner;