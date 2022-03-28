import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { deleteData, getDataAll } from '../../helpers/fetch'
import { SwitchCreatePost } from '../SwitchCreatePost/SwitchCreatePost'
import styles from "./AdminCrudPosts.module.css"


/* Table for render events, news, jobs, and forum CRUD
    props:
        name: string -> name of the table
        postType: string -> type of the post in database
        fields: array -> unic fields for each post
        children: array -> <td> to render in the body of table
        icon: string -> icon to render in the top of content
*/
function AdminCrudPosts({ children, name, postType, fields, icon }) {
    const { postsContext, setPostsContext, users, setUsers } = useContext(DataContext)
    const [data, setData] = useState([])
    const navigate = useNavigate()

    /* Get data of posts and then filter that data by type of post (typename) */
    const fetchData = async () => {
        if (!postsContext) {
            const data = await getDataAll("posts")
            const filterData = await data.filter((post) => post.type === postType)
            setData(filterData)
            setPostsContext(data)
        }
        else {
            const filterData = postsContext.filter((post) => post.type === postType)
            setData(filterData)
        }
    }
    /* Get data of all users */
    const fetchDataUser = async () => {
        const users = await getDataAll("users")
        setUsers(users)
    }
    /* Delete one post */
    const deletePost = (id) => {
        deleteData("posts", id)
        const newData = data.filter(post => post._id !== id)
        const newPostsContext = postsContext.filter(post => post._id !== id)
        setData(newData)
        setPostsContext(newPostsContext)
    }

    useEffect(async () => {
        await fetchData()
        await fetchDataUser()
    }, [])

    return (
        <>
            {/* Change emoji for icon (pass prop)*/}
            {/* <h1><span>{icon}</span>{name}</h1> */}
            <h1 className={styles.name}><span>🚀 </span>{name}</h1>
            {/* Create a new post */}
            <SwitchCreatePost postType={postType}>
                Crear {name.slice(0, -1)}
            </SwitchCreatePost>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Usuario</th>
                            <th>Comentarios</th>
                            <th>Likes</th>
                            <th>Tags</th>
                            {children}
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((post, index) => (
                            <tr key={index}>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>
                                    {users?.filter(user => (user._id === post.user_info))[0]?.firstName}&nbsp;
                                    {users?.filter(user => (user._id === post.user_info))[0]?.lastName}
                                </td>
                                <td>{post.comments.length}</td>
                                <td>{post.likes.length}</td>
                                <td>
                                    {post.technologies.map(tech => (<span key={tech}>{tech}</span>))}
                                    {post.tags.map(tag => (<span key={tag}>{tag}</span>))}
                                </td>
                                {fields.map((field, i) => (
                                    <td key={i}>{post[field]}</td>
                                ))}
                                <td>
                                    <button onClick={() => navigate(
                                        postType === 'news' ? `/formnews/${post._id}` :
                                            postType === 'event' ? `/formeventedit/${post._id}` :
                                                postType === 'jobs' ? `/formjobs/${post._id}` :
                                                    postType === 'questions' ? `/addquestion/${post._id}` : ''
                                    )}>Editar</button>
                                </td>
                                <td><button onClick={() => { deletePost(post._id) }}>🗑️</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminCrudPosts 