import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { getDataAll } from "../../helpers/fetch";


/* Questions maded by user -> renders in bodyprofile */
function UserQuestions() {
    const { postsContext, setPostsContext, idUser } = useContext(DataContext)
    const [filterUserQuestions, setFilterUserQuestions] = useState([])

    useEffect(async () => {
        if (!postsContext) {
            const data = await getDataAll("posts")
            /* Only get questions maded by user */
            const filterData = await data.filter((post) => post.type === "questions" && post.user_info === idUser)
            setFilterUserQuestions(filterData)
            setPostsContext(data)
        }
        else {
            const filterData = postsContext.filter((post) => post.type === "questions" && post.user_info === idUser)
            setFilterUserQuestions(filterData)
        }
    }, [idUser])

    return (
        <div>
            <h3>Mis Preguntas - Foro</h3>
            {filterUserQuestions.map((question) => (
                <Link key={question._id} to={`/questions/${question._id}`}>
                    <div>
                        <p>{question.title}</p>
                        <p>Comentarios: {question.comments.length}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export { UserQuestions };