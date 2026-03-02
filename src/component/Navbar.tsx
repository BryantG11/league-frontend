import logo from "/logo.png";
import "./Navbar.css"
import pfp from "../assets/pfp.png"
import usd from "../assets/usd.png"
import { Link } from 'react-router-dom';



export const Navbar = () => {

    return (
        <div>
            <nav>
                <div className="left">
                    <a href='/' className="logo"><img src={logo} alt="logo" /></a>
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
                        <Link to="/settings/profile"><div className="profile-item">
                            <div className="profile-pic"><img src={pfp} alt="" /></div>
                            <div className="profile-name">Doaenel</div>
                        </div></Link>
                        <Link to="/loyalty"><div className="dropdown-item">Rank: UNRANKED</div></Link>
                        <Link to="/wallet"><div className="dropdown-item">Wallet</div></Link>
                        <Link to="/settings"><div className="dropdown-item">Settings</div></Link>
                        <Link to="/history"><div className="dropdown-item">Match History</div></Link>
                        <Link to="/favorites"><div className="dropdown-item">Favorite teammates</div></Link>
                        <Link to="/blocked"><div className="dropdown-item">Blocked teammates</div></Link>
                        <Link to="/credits"><div className="dropdown-item">Buy Credits</div></Link>
                        <Link to="/inventory"><div className="dropdown-item">Inventory</div></Link>
                        <Link to="/signout"><div className="dropdown-item">Sign out</div></Link>
                    </div>
                </div>

            </div>
            </nav>
        </div>
    )
}