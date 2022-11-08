import React from "react";
import {useDispatch} from "react-redux";

import {deleteTuitThunk} from "../../services/tuits-thunks";

import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img className="float-end rounded-circle" src={`/images/${tuit.image}`} width={50} alt="user_avatar"/>
                </div>

                <div className="col-10">
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="fw-bolder">
                        {tuit.username} <i className="fa-solid fa-circle-check px-2"></i>
                        <span className="fw-normal">{tuit.handle} · {tuit.time}</span>
                    </div>

                    <div className="mb-3 pe-2">{tuit.tuit}</div>

                    <TuitStats tuit={tuit}/>
                </div>

            </div>
        </li>
    )
}

export default TuitItem;