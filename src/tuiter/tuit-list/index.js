import {useSelector} from "react-redux";

import TuitItem from "./tuit-list-item";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);

    return (
        <ul className="list-group">
            {tuits.map(tuit => <TuitItem tuit={tuit} key={tuit._id}/>)}
        </ul>
    )
}

export default TuitList;