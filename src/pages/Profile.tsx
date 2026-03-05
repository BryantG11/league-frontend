import "./Profile.css"

export const Profile = () => {
    return (
        <div className="edit-profile">
            <div className="profile-container">
                <div className="profile-top-part">
                    <div className="back-button">{'<'}</div>
                    <h3>Edit Profile</h3>
                </div>
                
                <div className="profile-bottom-part">
                    <div className="pfp">
                        <div className="img"></div>
                    </div>

                    <div className="profile-form">
                        <p className="email">Email</p>
                        <input type="text" className="email" />
                        <p  className="username">Username</p>
                        <input type="text" className="name" />                        
                        <p className="discord-tag">Discord Username </p>
                        <input type="text" className="discord-tag" />
                    </div>
                </div>
            </div>

            <button >Save</button>
        </div>
    )
}