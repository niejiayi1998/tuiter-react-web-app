import React from "react";

const PostSummaryItem = ({post}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div className="fw-bold">{post.username} <i className="fa-solid fa-circle-check"></i>
                        <span className="text-secondary fw-normal"> · {post.time}</span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                    {post.retuits ? <div className="text-secondary">{post.retuits} Tuits</div> : ""}
                </div>
                <div className="col-2 my-auto">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="post_img"/>
                </div>
            </div>
        </li>
    )
}

export default PostSummaryItem;