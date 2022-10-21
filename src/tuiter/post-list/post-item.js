import React from "react";

const PostItem = ({post}) => {
    return (
        <li className="list-group-item bg-black">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" src={`/images/${post.avatar}`} width="50px" height="50px" alt="user_avatar"/>
                </div>

                <div className="col-11 ps-4">
                    <div className="fw-bolder">
                        {post.username} <i className="fa-solid fa-circle-check pe-2"></i>
                        <span className="text-secondary fw-normal">@{post.handle} · {post.time}</span>
                    </div>

                    <div className="mb-2">{post.message}</div>

                    <div className="border border-secondary rounded">
                        <img className="rounded" src={`/images/${post.image}`} width="100%" alt="post_image"/>

                        {post.title ?
                        <div className="border-top border-secondary ps-2 pt-2">{post.title}</div>
                        : ""}

                        {post.body ?
                        <div className="text-secondary ps-2">{post.body}</div>
                        : ""}

                        {post.link ?
                        <div className="text-secondary ps-2 pb-2">
                                <i className="bi bi-link-45deg"></i> {post.link}</div>
                        : ""}

                    </div>

                    <div className="row text-secondary my-3">
                        <div className="col">
                            <i className="bi bi-chat pe-2"></i>{post.comment}
                        </div>
                        <div className="col">
                            <i className="bi bi-arrow-repeat pe-2"></i>{post.retweet}
                        </div>
                        <div className="col">
                            <i className="bi bi-heart pe-2"></i>{post.like}
                        </div>
                        <div className="col">
                            <i className="bi bi-box-arrow-up pe-2"></i>
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
}

export default PostItem;