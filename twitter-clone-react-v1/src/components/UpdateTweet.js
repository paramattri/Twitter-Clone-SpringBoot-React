import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

class UpdateTweet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id : this.props.match.params.id,
            userName : localStorage.getItem('userName'),
            tweet : ''
        }

        this.changeTweetHandler = this.changeTweetHandler.bind(this);
        this.updateTweet = this.updateTweet.bind(this);
    }

    changeTweetHandler = (e) => {
        this.setState({
            tweet : e.target.value
        })
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/twitter/tweets/${this.state.id}`).then(response => {
            let tweet = response.data;
            this.setState({
                // userName : tweet.userName,
                tweet : tweet.tweet
            })
        })
    }

    updateTweet = (e) => {
        e.preventDefault()
        let tweet = {userName : this.state.userName, tweet : this.state.tweet}
        console.log('tweet =>>' + JSON.stringify(tweet))
        axios.put(`http://localhost:8080/twitter/tweets/${this.state.id}`, tweet).then(response => {
            this.props.history.push("/twitter")
        })
    }

    cancel(){
        this.props.history.push("/twitter")
    }

    render() {
        return localStorage.getItem('userName') != null ? (
            <div className="updateTweet">
                <Navbar/>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card jumbotron col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Tweet</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                        <label>UserName: </label>
                                        <input name="userName" placeholder="User Name" className="form-control" 
                                            value={this.state.userName} readOnly></input>
                                    </div> */}
                                    <div className="form-group">
                                        <label>Tweet: </label>
                                        <textarea name="tweet" placeholder="Write Your Tweet Here" className="form-control"
                                            value={this.state.tweet} onChange={this.changeTweetHandler}/>
                                    </div>

                                    <button className="btn btn-warning" onClick={this.updateTweet}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>Cancel</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ) : (

            <div className="updateTweet">
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

export default UpdateTweet
