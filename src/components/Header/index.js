import {AiOutlineSearch} from "react-icons/ai"

import {Link} from "react-router-dom"

import "./index.css"

const Header = ()=>(
    <div className="header-container">
       <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/GIFFY1.gif?v=1693543991" className="header-image" loading="lazy" alt="logo"/>
       <div className="search-container">
        <AiOutlineSearch className="search-icon"/>
       <input type="text" className="header-input" placeholder="Search anything for your pet..." value="" autocapitalize="off" autocomplete="off" autocorrect="off"/>
       </div>
       <ul className="header-unordered-list">
        <li className="each-unordered-item">
            <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/support.svg?v=1652351889" alt="support"/>
            <p className="label-item">Support</p>
        </li>
        <li className="each-unordered-item">
            <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Login.svg?v=1652351889" alt="account"/>
            <p className="label-item">Account</p>
        </li>
        <li className="each-unordered-item">
            <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/shopping-cart_1.svg?v=1652351889" alt="cart"/>
            <p className="label-item">Cart</p>
        </li>
        <li>
            <Link to="/" className="label-item">Logout</Link>
        </li>
       </ul>
    </div>
)

export default Header
