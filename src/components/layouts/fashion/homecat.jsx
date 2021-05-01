import React, { Component } from 'react';
import Urldata from '../../../api/urldata.json'
import Apiurl from '../../../api/apiurl.json'
import Slider from 'react-slick';
import {Slider3} from "../../../services/script"
import {Link} from 'react-router-dom';



export default class Homecat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch(Apiurl.apiurl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.data,
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (

            <section className="section-b-space pb-0">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Slider {...Slider3} className="slide-3">
                        {items.map(item => (
                            <div key="{item.id}">
                                <div className="col-md-12">
                                    <Link to={`${process.env.PUBLIC_URL}/category/${item.name}`} >
                                        <div className="classic-effect">
                                        <img src={`${Urldata.backendurl}${item.banner}`} className="img-fluid" alt=""/>
                                                <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        <Link to={`${process.env.PUBLIC_URL}/category`} ><p>{item.name} </p></Link>
                                    </div>
                                </div>
                            </div>
                        ))}    
                        </Slider>
                    </div>
                </div>
            </div>
            </section>

        );
    }
}