import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="navbox">
                <div className="navleft">
                    <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                    <span>Course</span>
                </div>
                <div className="navmid">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/add'}>Add</Link></li>
                        <li><Link to={'/wishlist'}>Wishlist</Link></li>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>Home</Link></li>
                    </ul>
                </div>
                <div className="navright">
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>+43 4566 7788 2457</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar