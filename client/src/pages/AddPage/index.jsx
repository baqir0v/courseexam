import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../layout/Navbar'
import axios from "axios"

const AddPage = () => {
    const [data, setdata] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(null)

    const fetchData = async () => {
        const resp = await fetch("http://localhost:5500/api/course/")
        const jsonData = await resp.json()
        setdata(jsonData)
    }

    const handleDelete = async (_id) => {
        const resp = await axios.delete(`http://localhost:5500/api/course/${_id}`)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Navbar />
            <div className='addpage'>
                <Formik
                    initialValues={{ image: '', title: '', info: '', author: '', price: '' }}
                    validationSchema={Yup.object({
                        image: Yup.string()
                            .required('Required'),
                        title: Yup.string()
                            .required('Required'),
                        info: Yup.string().required('Required'),
                        author: Yup.string().required('Required'),
                        price: Yup.string().required('Required'),
                    })}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                        const handleAdd = async () => {
                            const resp = await axios.post(`http://localhost:5500/api/course/`, values)
                        }
                        handleAdd()
                        resetForm()
                    }}
                >
                    <Form>
                        <label htmlFor="image">Image</label>
                        <Field name="image" type="text" placeholder="Image" />
                        <ErrorMessage name="image" />

                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" placeholder="Title" />
                        <ErrorMessage name="title" />

                        <label htmlFor="info">Info</label>
                        <Field name="info" type="text" placeholder="Info" />
                        <ErrorMessage name="info" />

                        <label htmlFor="author">Author</label>
                        <Field name="author" type="text" placeholder="Author" />
                        <ErrorMessage name="author" />

                        <label htmlFor="price">Price</label>
                        <Field min="0" name="price" type="number" placeholder="Price" />
                        <ErrorMessage name="price" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Info</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                    <div className="sortsearch">
                        <input type="text" onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={() => setSort({ property: "title", asc: true })}>AZ</button>
                        <button onClick={() => setSort({ property: "title", asc: false })}>ZA</button>
                        <button onClick={() => setSort(null)}>Default</button>
                    </div>
                    {data && data.filter(x => x.title.toLowerCase().trim().includes(search.toLowerCase()))
                        .sort((a, b) => {
                        })
                        .map((item) => (
                            <tr key={item._id}>
                                <td><img src={item.image} alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.info}</td>
                                <td>{item.author}</td>
                                <td>{item.price}$</td>
                                <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                            </tr>
                        ))}
                </table>
            </div>
        </>
    )
}

export default AddPage