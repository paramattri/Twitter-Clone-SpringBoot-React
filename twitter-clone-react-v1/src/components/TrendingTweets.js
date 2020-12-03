import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

class TrendingTweets extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            trendingTweets : {} 
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/twitter/trending").then((response) => {
            console.log(response)
            this.setState({
                trendingTweets : response.data
            })
        })
    }

    render() {
        console.log(this.state.trendingTweets)
        Object.entries(this.state.trendingTweets).map(([key, value]) => {
            console.log(key+" "+value)
        })
        return localStorage.getItem('userName') != null ? (
            <div className="trendingTweets">
                <Navbar/>
                <div className="container">
                <br></br>
                <h1 style={{color:"white", textAlign:'center'}} className="display-4">Trending Tweets</h1>
                <br></br>
                <div className="row">
                <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Tweet</th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        Object.entries(this.state.trendingTweets).map(([key, value]) =>

                            <tr>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ) 
                    }
                </tbody>
                </table>
                </div>

                </div>
            </div>
        ) : (

            <div className="trendingTweets">
            <div className="container">

            <div className="jumbotron">

               <h1 className="display-5">Login to see Amazing tweets!!</h1>
               <hr className="my-4"/>
               <br/>
               <Link to='/login' className="btn btn-outline-primary" role="button">Log In to Existing Account</Link>

            </div>

            </div>
            </div>

            )
    }
}

export default TrendingTweets
