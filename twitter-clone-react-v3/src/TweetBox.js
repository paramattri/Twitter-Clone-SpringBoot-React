import { Avatar, Button } from '@material-ui/core'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './TweetBox.css'
import { useHistory } from "react-router";

function TweetBox(props) {

    const {setOpenPopup} = props
    const [displayName, setDisplayName] = useState('')
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const [avatar, setAvatar] = useState('')
    const [verified] = useState(userName==="Pattri" ? true : false)

    // const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8080/twitter/user/${userName}`).then(response => {
            console.log(response);
            console.log(response.data)
            setDisplayName(response.data.displayName)
            setAvatar(response.data.avatar)
        })
    }, [])

    const sendTweet = e => {
        e.preventDefault();
        //Send data to database-----Implement   
        console.log({displayName : displayName, userName : userName, tweetBody : tweetMessage, tweetImage : tweetImage, verified : verified})
        axios.post("http://localhost:8080/twitter/tweet", {displayName : displayName, userName : userName, tweetBody : tweetMessage, tweetImage : tweetImage, avatar : avatar, verified : verified})
        .then((response) => {
            console.log("Tweet Posted Successfully!!")
            window.location.reload()
            // history.push("/")
        })
        setOpenPopup(false)
        setTweetMessage("");
        setTweetImage("");  
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src={avatar}/>
                <input value={tweetMessage} placeholder="What's happening?" type="text" onChange={e => setTweetMessage(e.target.value)}/>
                </div>
                <input value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" onChange={e => setTweetImage(e.target.value)}/>
                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>Tweet</Button>
            </form>   
        </div>
    )
}

export default TweetBox
