import logo from "../../images/TedLead-logo3.png";
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import CartWidget from '../CartWidget';
import { NavLink } from "react-router-dom";

function NavBar() {
    return <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid header">
                <Logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Tab title="Menu"/>
                        <Tab title="Location"/>
                        <Tab title="Reviews"/>
                        <Tab title="Contact"/>
                        <CartWidget />
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    </div>;
}

function Logo () {
       return <div>
            <NavLink to={"/"}><a className="navbar-brand" href="">
                <img  src={logo} alt="logo" className="header__logo-img"/>
            </a></NavLink>
        </div>
}

function Tab({ title }) {
    return <li className="nav-item header__item">
        <a className="nav-link" href="">{title}</a>
        </li>
}   


export default NavBar