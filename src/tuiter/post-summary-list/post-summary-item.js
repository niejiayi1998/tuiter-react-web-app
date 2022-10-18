import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div className="fw-bold">{post.userName} <i className="bi bi-check-circle-fill"></i>
                        <span className="text-secondary fw-normal"> · {post.time}</span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                    {post.tweets ? <div className="text-secondary">{post.tweets} Tweets</div> : ""}
                </div>
                <div className="col-2 my-auto">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="post_img"/>
                </div>
            </div>
        </li>
    )
}

export default PostSummaryItem;