import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/wishlistContext'
import { BasketContext } from '../../Context/basketContext'

const Courses = () => {
    const [data, setdata] = useState([])
    const { addToBasket } = useContext(BasketContext)
    const {addToWishlist} =useContext(WishlistContext)

    const fetchData = async () => {
        const resp = await fetch("http://localhost:5500/api/course/")
        const jsonData = await resp.json()
        setdata(jsonData)
    }

    useEffect(() => {
        fetchData() 
    }, [])

    return (
        <section id='courses'>
            <div className="coursetitle">
                <span></span>
                <h1>Popular Courses</h1>
            </div>
            <div className="coursesbox">
                {data && data.map((item) => (
                    <ul key={item._id}>
                        <li><img src={item.image} alt="" /></li>
                        <li>{item.title}</li>
                        <li>{item.info}</li>
                        <li>{item.author}</li>
                        <li>{item.price}</li>
                        <li><button onClick={()=>addToWishlist(item)}>Wishlist</button></li>
                        <li><button onClick={()=>addToBasket(item)}>Basket</button></li>
                        <li><Link to={`/detail/${item._id}`}>Detail</Link></li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Courses