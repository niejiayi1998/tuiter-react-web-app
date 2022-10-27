import React from "react";

const TuitStats = ({tuit}) => {
    return(
        <div className="row">
            <div className="col">
                <i className="fa-regular fa-comment pe-2"></i>{tuit.replies}
            </div>
            <div className="col">
                <i className="fa-solid fa-retweet pe-2"></i>{tuit.retuits}
            </div>
            <div className="col">
                {tuit.liked ?
                    <i className="fa-solid fa-heart text-danger pe-2"></i> : <i className="fa-regular fa-heart pe-2"></i> }
                {tuit.likes}
            </div>
            <div className="col">
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    )
}

export default TuitStats;