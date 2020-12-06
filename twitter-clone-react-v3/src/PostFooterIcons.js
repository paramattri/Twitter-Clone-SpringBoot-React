import React, {useState, useEffect} from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';

function PostFooterIcons({tweetId, likes}) {

    const [isClicked, setIsClicked] = useState(false)
    const [newLikes , setNewLikes] = useState(likes)

    const likeHandle = () => {
        setIsClicked(true)
        console.log("In like click handle")
        setNewLikes(prev => prev + 1)
    }

    const unLikeHandle = () => {
        setIsClicked(false)
        console.log("in dislike handle")
        setNewLikes(prev => prev - 1)
    }

    useEffect(() => {
        console.log(newLikes)
        axios.put(`http://localhost:8080/twitter/tweets/like/${tweetId}`, {likes: newLikes})
        .then(response => console.log("value updated"))
    }, [newLikes])

    return (
        <React.Fragment>
            <ChatBubbleIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            {isClicked ? <span style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}><FavoriteIcon fontSize="small" style={{ color: 'red', cursor: 'pointer'}} onClick={unLikeHandle}/>
            <p style={{fontSize: '14px', fontWeight: '600' , color: 'gray', marginLeft: '5px'}}>{newLikes > 0 && (newLikes === 1 ? `${newLikes} like` : `${newLikes} likes`)}</p></span> 
            : <span style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}><FavoriteBorderIcon fontSize="small" style={{cursor: 'pointer'}} onClick={likeHandle}/>
            <p style={{fontSize: '14px', fontWeight: '600' , color: 'gray', marginLeft: '5px'}}>{newLikes > 0 && (newLikes === 1 ? `${newLikes} like` : `${newLikes} likes`)}</p></span>}
            <PublishIcon fontSize="small"/> 
        </React.Fragment>
    )
}

export default PostFooterIcons
