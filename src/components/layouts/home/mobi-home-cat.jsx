import React, { Component } from 'react';
import Urldata from '../../../api/urldata.json'
import Apiurl from '../../../api/apiurl.json'
import {Link} from 'react-router-dom';


export default class MobiHomeCat extends Component {
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
        /* if (!isLoaded) {
            return <div>Loading...</div>;
        } */
        return (

            <section className="mobi-home-cat">
                <div className="container">
                    <div className="row">

                        <ul className="col-md-12">
                            {items.map(item => (
                            
                                    <li key="{item.id}" >
                                        <Link to={`${process.env.PUBLIC_URL}/category/${item.name}`} >
                                            <div className="classic-effect mobi-home-cat-img">
                                            <img src={`${process.env.BACKEND_URL}${item.banner}`} className="img-fluid" alt=""/>
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="mobi-home-cat-text">
                                            <Link to={`${process.env.PUBLIC_URL}/category`} ><p>{item.name} </p></Link>
                                        </div>
                                    </li>

                                    )
                                )
                            }
                        </ul>
    
                    </div>
                </div>
            </section>

        );
    }
}