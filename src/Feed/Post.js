import React, { forwardRef } from 'react';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import './Post.css';

const Post = forwardRef(
    ({ displayName, userName, verified, text, image, avatar }, ref) => 
{
    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <Avatar src = {avatar}/>
            </div>

            <div className="post__body">

                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon fontSize="small" className="post__badge"/>}
                                {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>

                <img src={image} alt = {`Not loading`}/>

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>

            </div>
        </div>
    );
}
);

export default Post;
