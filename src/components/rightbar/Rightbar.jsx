import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthbayContainer">
                    <img src="/assets/gift.png" alt="" className="birthbayImg" />
                    <span className="birthdayText"> {" "}
                        <b>pola Foster</b> and <b>3 other friends</b> hav a birhday today
                    </span>
                </div>
                <img src="/assets/ji.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Georgia</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Tbilisi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFillowingName">jimsheri gvinjo</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFillowingName">jimsheri gvinjo</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFillowingName">jimsheri gvinjo</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFillowingName">jimsheri gvinjo</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFillowingName">jimsheri gvinjo</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFillowingName">jimsheri gvinjo</span>
                    </div>
                    
                </div>
                </>
            )

    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );

}