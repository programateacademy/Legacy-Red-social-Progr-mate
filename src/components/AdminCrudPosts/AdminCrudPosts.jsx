import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { getData, getDataAll } from '../../helpers/fetch'

/* Table for render events, news, jobs, and forum CRUD*/
function AdminCrudPosts({ children, name, nameType, fields }) {
    const { getPosts } = useContext(DataContext)
    const [data, setData] = useState([])
    const [users, setDatausers] = useState([])

    const fetchData = async () => {
        const data = await getDataAll("posts")
        const filterData = await data.filter((post) => post.type === nameType)
        setData(filterData)
    }
    const fetchDataUser = async () => {
        const users = await getDataAll("users")
        setDatausers(users)
    }

    useEffect(async () => {
        getPosts && data.length ? setData(getPosts) : await fetchData()
        await fetchDataUser()
    }, [])

    return (
        <>
            {/* Change emoji for icon */}
            <h1><span>🚀 </span>{name}</h1>
            <button>Crear {name}</button>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Usuario</th>
                        {children}
                    </tr>
                </thead>
                <tbody>
                    {data.map((post, index) => (
                        <tr key={index}>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>
                                {users.filter(user => (user._id === post.user_info))[0]?.firstName}&nbsp;
                                {users.filter(user => (user._id === post.user_info))[0]?.lastName}  
                            </td>

                            <td>Editar</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </>
    )
}

export { AdminCrudPosts }