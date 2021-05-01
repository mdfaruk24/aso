import React, { Component } from 'react';
import Backendurl from '../api/backendurl.json'



export default class Apidata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('http://localhost/aura/api/v2/categories/featured')
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
            <div>

                <ul>
                    {items.map(item => (
                        <li key="{item.id}">
                            {item.name}
                            <img src={`${Backendurl.BACKENDURL}${item.banner}`} className="img-fluid" alt=""/>                 
                        </li> 
                    ))}
                </ul>
            </div>
        );
    }
}