import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlistContext'
import Navbar from '../../layout/Navbar'
import "./index.scss"
import { BasketContext } from '../../Context/basketContext'

const Basket = () => {
    const { basket, addToBasket ,addCount,deleteCount,deleteBasket} = useContext(BasketContext)
    const subtotal = basket.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <div>
            <Navbar/>
            <div className="basket">
            {basket && basket.map((item) => {
                const total = item.price * item.count
                return (
                    <ul key={item._id}>
                    <li><img src={item.image} alt="" /></li>
                    <li>{item.title}</li>
                    <li>{item.info}</li>
                    <li>{item.author}</li>
                    <li>{item.price}</li>
                    <li><button onClick={() => addToBasket(item)}>Basket</button></li>
                    <li>{item.count}</li>
                    <li><button onClick={()=>addCount(item)}>+</button></li>
                    <li><button onClick={()=>deleteCount(item)}>-</button></li>
                    <li><button onClick={()=>deleteBasket(item)}>Delete</button></li>
                    <li>{total}</li>
                </ul>
                )
                })}
                <h3>{subtotal}</h3>
            </div>
        </div>
    )
}

export default Basket