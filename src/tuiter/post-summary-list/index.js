import React from "react";

import PostSummaryItem from "./post-summary-item";
import postsArray from "./posts.json";

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {postsArray.map(post => <PostSummaryItem key={post._id} post={post} />)}
        </ul>
    )
}

export default PostSummaryList;