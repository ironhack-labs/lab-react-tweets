import React from 'react'
import { Tweet } from "./Tweet";

export const TweetsList = (props) => {
    return props.tweets.map( (tweet) => {
        return (
            <div>
                <Tweet tweet={ tweet } />
            </div>
        )
    })
}
