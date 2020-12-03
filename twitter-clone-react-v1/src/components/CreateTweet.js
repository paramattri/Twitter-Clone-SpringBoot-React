import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

class CreateTweet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userName : localStorage.getItem('userName'),
            tweet : ''
        }

        this.changeTweetHandler = this.changeTweetHandler.bind(this);
        this.saveTweet = this.saveTweet.bind(this);
    }

    changeTweetHandler = (e) => {
        this.setState({
            tweet : e.target.value
        })
    }

    saveTweet = (e) => {
        e.preventDefault()
        let tweet = {userName : this.state.userName, tweet : this.state.tweet}
        console.log('tweet =>>' + JSON.stringify(tweet))
        axios.post("http://localhost:8080/twitter/tweet", tweet).then(response => {
            this.props.history.push("/twitter")
        })
    }

    cancel(){
        this.props.history.push("/twitter")
    }

    render() {
        return localStorage.getItem('userName') != null ? (
            <div className="createTweet">
                <Navbar/>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card jumbotron col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Tweet</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                        <label>UserName: </label>
                                        <input name="userName" placeholder="User Name" className="form-control" 
                                            value={this.state.userName} onChange={this.changeUserNameHandler}></input>
                                    </div> */}
                                    <div className="form-group">
                                        <label>Tweet: </label>
                                        <textarea name="tweet" placeholder="Write Your Tweet Here" className="form-control"
                                            value={this.state.tweet} onChange={this.changeTweetHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveTweet}>Tweet</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>Cancel</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ) : (
                
            <div className="createTweet">
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

export default CreateTweet
