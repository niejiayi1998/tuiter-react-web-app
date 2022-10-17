import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}

export default Nav;