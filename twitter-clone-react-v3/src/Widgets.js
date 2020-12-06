import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets(props) {

    const searchHandler = (event) => {
        let keyword = event.target.value;
        //console.log(keyword)
        props.parentCallback(keyword)
    }

    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="search" onChange={searchHandler}/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1332399251545071618'}/>

                <TwitterTimelineEmbed
                    sourceType = "profile"
                    screenName = "ChelseaFC"
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={'https://www.facebook.com/param.attri.7/'}
                    options={{ text: '#reactjs is awesome', via: 'ParamAttri4' }}
                />

            </div>
        </div>
    )
}

export default Widgets
