import React,{useState} from 'react';
import './TweetBox.css';
import firebaseApp from '../firebase.js';
import 'firebase/firestore';
import { Avatar,Button } from "@material-ui/core";

function TweetBox() {

    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        firebaseApp.firestore().collection("posts").add({
            displayName: "Rohan Choudhary",
            username: "rohan",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "http://rohanchoudhary.in/images/rohan.jpeg",
        });
    
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src = "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/03/wwe-did-drew-mcintyre-break-protocol-during-raws-last-episode-0001.jpg"/>
                    
                    <textarea 
                        onChange={(e)=>setTweetMessage(e.target.value)}
                        maxlength="300"
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        cols="40" rows="5"
                    />

                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button 
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"> Tweet </Button>
            </form>
        </div>
    );
}

export default TweetBox;
