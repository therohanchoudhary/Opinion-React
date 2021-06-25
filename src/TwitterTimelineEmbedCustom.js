import React from 'react';
import {TwitterTimelineEmbed} from "react-twitter-embed";

function TwitterTimelineEmbedCustom({name}) {
    return (   
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName={name}
            options={{height: 400}}
        />
    );
}

export default TwitterTimelineEmbedCustom;
