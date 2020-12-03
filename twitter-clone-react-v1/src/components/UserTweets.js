import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

class UserTweets extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
            tweets : [],
            errorMsg : '',
            search : null, 
            userName : localStorage.getItem('userName')
        }
        
        this.addTweet = this.addTweet.bind(this);
        this.editTweet = this.editTweet.bind(this);
        this.deleteTweet = this.deleteTweet.bind(this);
    }
    
    SearchKeywordHandler = (keyword) => {
        this.setState({
            search : keyword
        })
    }

    deleteTweet(tweetId){
        axios.delete(`http://localhost:8080/twitter/tweets/${tweetId}`).then(response => {
            window.location.reload()
            // this.setState({
            //     tweets : this.state.tweets.filter(tweet => tweet.id !== tweetId)
            // })
        })
    }

    editTweet(tweetId){
        this.props.history.push(`/update-tweet/${tweetId}`);
    }

    addTweet(){
        this.props.history.push("/add-tweet");
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/twitter/tweets/user/${this.state.userName}`)
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

        const{tweets, errorMsg, search, userName} = this.state;

        return localStorage.getItem('userName') != null ? (       
            <div className="userHomePage">
                
                <Navbar/>
                <div className="container">
                <br></br>
                <h1 style={{color:"white", textAlign:'center'}} className="display-4">@{userName}{" "}Tweets</h1>
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
                        <th scope="col">Tweet</th>
                        <th scope="col">Creation Time<br></br>(yyyy-MM-dd HH:mm:ss)</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        tweets.length ?
                        tweets.filter((tweet) => {
                            if(search == null)
                                return tweet
                            else if(tweet.tweet.toLowerCase().includes(search.toLowerCase()))
                                return tweet
                            else
                                return null
                        }).map(tweet => 

                            <tr key={tweet.tweetId}>
                                <td>{tweet.tweet}</td>
                                <td>{tweet.creationTime}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={ () => this.editTweet(tweet.tweetId)}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg></button>
                                    
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTweet(tweet.tweetId)} className="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                        </svg></button>
                                </td>
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
             <div className="userHomePage">
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

export default UserTweets
