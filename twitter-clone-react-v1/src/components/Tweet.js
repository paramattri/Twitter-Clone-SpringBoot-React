import axios from 'axios'
import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

class Tweet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            tweets : [],
            errorMsg : '',
            search : null
        }
        this.addTweet = this.addTweet.bind(this);
    }


    SearchKeywordHandler = (keyword) => {
        this.setState({
            search : keyword
        })
    }
    
    addTweet(){
        this.props.history.push("/add-tweet");
    }

    componentDidMount(){
        axios.get("http://localhost:8080/twitter/tweets")
        .then((response) => {
            console.log(response);
            console.log(response.data)
            this.setState({tweets : response.data})
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                errorMsg : 'Error retrieving the tweets'
            })
        });
        console.log(this.state.errorMsg)
        console.log(this.state.tweets)
    }

    render() {

        const{tweets, errorMsg, search} = this.state;

        return localStorage.getItem('userName') != null ? (
            <div className="twitterHomePage">
                <Navbar/>
                <div className="container">
                <br></br>
                <h1 style={{color:"white", textAlign:'center'}} className="display-4">Tweets</h1>
                <br></br>
                <div className="row">
                <SearchBar parentCallback={this.SearchKeywordHandler}/>&nbsp;
                    <button className="btn btn-primary" onClick={this.addTweet}>Tweet</button>
                </div>
                <br></br>
                <div className="row">
                <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Tweet</th>
                        <th scope="col">Creation Time<br></br>(yyyy-MM-dd HH:mm:ss)</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        tweets.length ?
                        tweets.filter((tweet) => {
                            if(search == null)
                                return tweet
                            else if(tweet.userName.toLowerCase().includes(search.toLowerCase()) || tweet.tweet.toLowerCase().includes(search.toLowerCase()))
                                return tweet
                            else
                                return null
                        }).map(tweet => 

                            <tr key={tweet.tweetId}>
                                <td>{tweet.userName}</td>
                                <td>{tweet.tweet}</td>
                                <td>{tweet.creationTime}</td>
                            </tr>
                        ) : null
                    }
                    {errorMsg ? <div>{errorMsg}</div> : null}

                </tbody>
                </table>
                </div>

                </div>
                
            </div>
        ) : (

            <div className="twitterHomePage">
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

export default Tweet

