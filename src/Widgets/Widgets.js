import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TwitterTimelineEmbedCustom from "../TwitterTimelineEmbedCustom.js";
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search" type="text"/>
            </div>
            
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTimelineEmbedCustom name="narendramodi"/>
                <TwitterTimelineEmbedCustom name="potus"/>
                <TwitterTimelineEmbedCustom name="KremlinRussia_E"/>
                <TwitterTimelineEmbedCustom name="EmmanuelMacron"/>
                <TwitterTimelineEmbedCustom name="10DowningStreet"/>
                <TwitterTimelineEmbedCustom name="naftalibennett"/>
            </div>
        </div>        
    );
}

export default Widgets;
