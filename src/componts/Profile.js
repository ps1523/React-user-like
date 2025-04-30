import { useState } from 'react';
import './Profile.css';

function Profile({ name, role, image }) {
    const [heart, setHeart] = useState(0);
    const [followMe, setFollowMe] = useState(0);

    function updateHeart() {
        setHeart(heart + 1);
    }

    function updateFollowMe() {
        setFollowMe(followMe + 1);
    }

    function updateUnfollowMe() {
        if (followMe > 0) {
            setFollowMe(followMe - 1);
        } else {
            alert("Follow count is already zero!");
        }
    }

    return (
        <div className="profile-card">
            <img src={image} alt="Profile Image" />
            <h1>{name}</h1>
            <p>{role}</p>
            <button className="follow-btn" onClick={updateFollowMe}>
                Follow Me {followMe}
            </button>
            <button className="like-btn" onClick={updateHeart}>
                Heart {heart}
            </button>
            <button className="unfollow-btn" onClick={updateUnfollowMe}>
                Unfollow Me
            </button>
        </div>
    );
}

export default Profile;