import React from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function PostFooterIcons() {
    return (
        <React.Fragment>
            <ChatBubbleIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/> 
        </React.Fragment>
    )
}

export default PostFooterIcons
