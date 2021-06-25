import React, { useState,useEffect } from 'react';
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import FlipMove from 'react-flip-move';
import './Feed.css';
import firebaseApp from '../firebase.js';
import firebase from "firebase/app";
import  "firebase/firestore";

function Feed({isLoggedIn}) {

    console.log(isLoggedIn);
    const [posts,setPosts] = useState([]);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        promt: "select_account",
    });

    var signInWithGoogle = () => firebase.auth().signInWithPopup(provider); 

    useEffect(() => { 
        firebaseApp.firestore().collection('posts').onSnapshot(snapshots => (
            setPosts(snapshots.docs.map(doc => doc.data()))
        ))
    } , []);

    return (
        <div className="feed">
            {
                isLoggedIn===true ? 
                <TweetBox /> :
                <button class="btn btn-outline-dark" className="googleButton" type="button" 
                        fullWidth variant="contained" onClick = {signInWithGoogle} color="secondary">
                    Sign In/Register with Google Account to Post
                </button>
            }

            <FlipMove>
            {
                posts.map(post => (
                    <Post 
                        avatar={post.avatar} 
                        displayName={post.displayName} 
                        image={post.image} 
                        text={post.text} 
                        userName={" @" + post.username} 
                        verified={post.verified}
                    />
                ))
            }
            </FlipMove>
        </div>
    );
}

export default Feed;
