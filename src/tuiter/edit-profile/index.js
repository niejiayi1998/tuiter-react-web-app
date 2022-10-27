import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";

import {editProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [name, setName] = useState(`${profile.firstName} ${profile.lastName}`);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDOB] = useState(profile.dateOfBirth);

    const saveProfileHandler = () => {
        const names = name.split(" ");
        const newProfile = {
            ...profile,
            firstName: names[0],
            lastName: names[1],
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dob,
        }
        dispatch(editProfile(newProfile))
    }


    return (
        <div className="bg-light rounded mb-3">
            <div className="row py-3">
                <Link to="/tuiter/profile" className="col-1 fs-5 text-dark">
                    <i className="fa-solid fa-x ps-3"></i>
                </Link>

                <div className="col-11 ps-5">
                    <h5 className="d-inline">Edit Profile</h5>
                    <Link
                        to="/tuiter/profile"
                        className="btn btn-primary float-end rounded-pill me-2"
                        onClick={saveProfileHandler}
                    >
                        Save
                    </Link>
                </div>
            </div>

            <div className="position-relative">
                <img className="w-100" src="/images/banner.webp" alt="banner_pic"/>
                <img className="position-absolute wd-profile-pic rounded-circle" src={`/images/${profile.profilePicture}`} width={100}/>
            </div>
            <br />

            <div className="mt-5 px-3">
                <label htmlFor="name">Name</label><br/>
                <input
                    className="w-100"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mt-3 px-3">
                <label htmlFor="bio">Bio</label><br/>
                <textarea
                    className="w-100"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </div>

            <div className="mt-3 px-3">
                <label htmlFor="location">Location</label><br/>
                <input
                    className="w-100"
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <div className="mt-4 px-3">
                <label htmlFor="website">Website</label><br/>
                <input
                    id="website"
                    type="text"
                    className="w-100"
                    placeholder="Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>

            <div className="mt-4 px-3 pb-3">
                <label htmlFor="dob">Birth date</label><br/>
                <input
                    id="dob"
                    type="date"
                    className="w-100"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                />
            </div>


        </div>
    )
}

export default EditProfile;