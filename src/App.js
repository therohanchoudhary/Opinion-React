import './App.css';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar.js';
import Feed from './Feed/Feed.js';
import Widgets from './Widgets/Widgets.js';
import firebase from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [loggedIn,setLoggedIn] = useState(false);

  const func = firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setLoggedIn(true);
    } 
  });

  func();

  return (
    <div className="app">
      <Sidebar />
      <Feed isLoggedIn={loggedIn}/>
      <Widgets />
    </div>
  );
}

export default App;
