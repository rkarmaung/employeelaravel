import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            contact : []
        }
    }

    componentDidMount(){
        Axios.get('/api/contacts')
            .then(response => {
                this.setState({
                    contact : response.data
                })
            }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Contacts</div>
                            <Link to="/add" className="btn btn-info col-md-3 m-2 btn-sm mr-2">Add</Link>

                            <div className="card-body">
                                <table></table>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

