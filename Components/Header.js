import {LOGO_URL} from "../Utils/urls"
const Header = () => {
    return (
        <div className="header">
            <div className = "logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="cartSide">
                <ul>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;