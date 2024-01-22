import React, { useEffect, useState } from 'react'
import "./index.scss"
import Navbar from '../../layout/Navbar'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:5500/api/course/${id}`)
        const jsonData = await resp.json()
        setDetail(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Navbar />
            <div className='detail'>
                {detail ?
                    <ul>
                        <li><img src={detail.image} alt="" /></li>
                        <li>{detail.title}</li>
                        <li>{detail.info}</li>
                        <li>{detail.author}</li>
                        <li>{detail.price}</li>
                    </ul>
                    : ""
                }


            </div>
        </>
    )
}

export default DetailPage