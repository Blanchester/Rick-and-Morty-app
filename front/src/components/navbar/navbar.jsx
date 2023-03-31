import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import './navbar.css'


const NavBar = ({onSearch}) => {
    return(
        <div className="navContainer">
            <nav className="navbar">
                <img src="https://www.giantbomb.com/a/uploads/original/10/103881/2819072-rick%20and%20morty.png" alt="Company Logo"/>
                <ul className="nav ">
                    <SearchBar onSearch={onSearch}/>
                    <div>
                        <Link className="navItem" to="/about">About</Link>
                        <Link className="navItem" to="/home">Home</Link>
                        <Link className="navItem" to="/favorites">Favorites</Link>
                        <Link className="navItem" to="/">LOGOUT</Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
    
}

export default NavBar;