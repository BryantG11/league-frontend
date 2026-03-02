import logo from "/logo.png";
import "./Navbar.css"
import pfp from "../assets/pfp.png"
import usd from "../assets/usd.png"


export const Navbar = () => {

    return (
        <div>
            <nav>
                <div className="left">
                    <a href='logo' className="logo"><img src={logo} alt="logo" /></a>
                </div>
            <div className="right">

            <div className="position">
                <div className="usd">

                    <img src={usd}/>USD - $
                    
                    <div className="dropdown-list">
                        <div className="dropdown-item"><span>🏴</span>USD - $</div>
                        <div className="dropdown-item"><span>🏴</span>EUR - €</div>
                    </div>
                </div>
            </div>

                <div className="rewards">REWARDS</div>
                <div className="buy-credits">BUY CREDITS, SAVE MORE!</div>
                <div className="get-pro">GET PRO</div>

                <div className="profile-circle">
                    <div className="profile-pic"><img src={pfp} alt="" /></div>
                    <div className="burger-menu">
                        ☰
                    </div>

                    <div className="dropdown-list">
                        <div className="profile-item">
                            <div className="profile-pic"><img src={pfp} alt="" /></div>
                            <div className="profile-name">Doaenel</div>
                        </div>
                        <div className="dropdown-item">Rank: UNRANKED</div>
                        <div className="dropdown-item">Wallet</div>
                        <div className="dropdown-item">Settings</div>
                        <div className="dropdown-item">Match History</div>
                        <div className="dropdown-item">Settings</div>
                        <div className="dropdown-item">Favorite teammates</div>
                        <div className="dropdown-item">Blocked teammates</div>
                        <div className="dropdown-item">Buy Credits</div>
                        <div className="dropdown-item">Inventory</div>
                        <div className="dropdown-item">Sign out</div>
                    </div>
                </div>

            </div>
            </nav>
        </div>
    )
}