import React from "react";

import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split("/");
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active':''}`}>
                <i className="bi bi-house-door-fill pe-2"></i>
                <span className="d-none d-xl-inline">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active':''}`}>
                <i className="bi bi-hash pe-2"></i>
                <span className="d-none d-xl-inline">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item ${active === 'notifications' ? 'active':''}`}>
                <i className="bi bi-bell-fill pe-2"></i>
                <span className="d-none d-xl-inline">Notifications</span>
            </a>
            <a className={`list-group-item ${active === 'messages' ? 'active':''}`}>
                <i className="bi bi-envelope-fill pe-2"></i>
                <span className="d-none d-xl-inline">Messages</span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks' ? 'active':''}`}>
                <i className="bi bi-bookmark-fill pe-2"></i>
                <span className="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a className={`list-group-item ${active === 'lists' ? 'active':''}`}>
                <i className="bi bi-list-ul pe-2"></i>
                <span className="d-none d-xl-inline">Lists</span>
            </a>
            <a className={`list-group-item ${active === 'profile' ? 'active':''}`}>
                <i className="bi bi-person-fill pe-2"></i>
                <span className="d-none d-xl-inline">Profile</span>
            </a>
            <a className={`list-group-item ${active === 'more' ? 'active':''}`}>
                <i className="bi bi-info-circle-fill pe-2"></i>
                <span className="d-none d-xl-inline">More</span>
            </a>
        </div>

    );
}

export default NavigationSidebar;