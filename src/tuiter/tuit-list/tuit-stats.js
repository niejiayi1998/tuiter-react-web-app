import React from "react";
import {useDispatch} from "react-redux";

import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row">
            <div className="col">
                <i className="fa-regular fa-comment pe-2"></i>{tuit.replies}
            </div>
            <div className="col">
                <i className="fa-solid fa-retweet pe-2"></i>{tuit.retuits}
            </div>
            <div className="col">
                {/*{tuit.liked ?*/}
                {/*    <i className="fa-solid fa-heart text-danger pe-2"></i> : <i className="fa-regular fa-heart pe-2"></i> }*/}
                {/*{tuit.likes}*/}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))}
                   className="bi bi-heart-fill me-2 text-danger"></i>
                {tuit.likes}
            </div>
            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))}
                    className="fa-solid fa-thumbs-down me-2"></i>
                {tuit.dislikes}
            </div>
            <div className="col">
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    )
}

export default TuitStats;