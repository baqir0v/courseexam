import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlistContext'
import Navbar from '../../layout/Navbar'
import "./index.scss"

const Wishlist = () => {
    const { wishlist, addToWishlist } = useContext(WishlistContext)

    return (
        <div>
            <Navbar/>
            <div className="wishlist">
            {wishlist && wishlist.map((item) => (
                <ul key={item._id}>
                    <li><img src={item.image} alt="" /></li>
                    <li>{item.title}</li>
                    <li>{item.info}</li>
                    <li>{item.author}</li>
                    <li>{item.price}</li>
                    <li><button onClick={() => addToWishlist(item)}>Wishlist</button></li>
                </ul>
            ))}
            </div>
        </div>
    )
}

export default Wishlist