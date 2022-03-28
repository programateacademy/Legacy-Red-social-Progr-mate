import React, { Fragment, useContext, useEffect } from "react";

import News from "./News";
import Jobs from "./Jobs";
import Events from "./Events";
import { getData, getDataAll } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";
import { useState } from "react";
import style from "./Posts.module.css";

const Posts = () => {
    const { getPosts, setGetPosts, filterHome, setFilterHome, idUser } =
        useContext(DataContext);

    const [dataUsers, setDataUsers] = useState([]);
    const [quantityPosts, setQuantityPosts] = useState(35);
    const [getRol, setGetRol] = useState(1);

    useEffect(async () => {
        try {
            const data = await  ("users");
            setDataUsers(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(async () => {
        if (idUser) {
            try {
                const data = await getData("users", idUser);
                // console.log(data, "rol");
                setGetRol(data.rol);
            } catch (error) {
                console.log(error);
            }
        }
    }, [idUser]);

    const filteredUser = () => {
        const filteredUser = dataUsers.filter((user) =>
            user?.firstName
                .concat(" ", user?.lastName)
                .toLowerCase()
                .includes(filterHome)
        );

        return filteredUser;
    };

    const filterPosts = () => {
        if (filterHome.length !== 0) {
            const filtered = getPosts.filter(
                (post) =>
                    post?.type?.toLowerCase().includes(filterHome) ||
                    post?.title?.toLowerCase().includes(filterHome) ||
                    post?.company?.toLowerCase().includes(filterHome) ||
                    post?.description?.toLowerCase().includes(filterHome) ||
                    post?.technologies
                        ?.map((tech) => tech.toLowerCase())
                        .includes(filterHome) ||
                    filteredUser()
                        .map((user) => user._id)
                        .includes(post?.user_info)
            );
            return filtered?.slice(0, quantityPosts);
        } else {
            return getPosts?.slice(0, quantityPosts);
        }
    };

    const showMorePosts = () => {
        setQuantityPosts(quantityPosts + 15);
    };

    useEffect(async () => {
        try {
            const data = await getDataAll("posts");
            setGetPosts(data.reverse());
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <Fragment>
            {filterPosts()?.map((post) =>
                post.type === "news" ? (
                    <News
                        description={post.description}
                        images={post.image}
                        technologies={post.technologies}
                        title={post.title}
                        id={post._id}
                        user={post.user_info ? post.user_info : ""}
                        rol={getRol}
                        key={post._id}
                    />
                ) : post.type === "jobs" ? (
                    <Jobs
                        description={post.description}
                        technologies={post.technologies}
                        title={post.title}
                        company={post.company}
                        place={post.place}
                        modality={post.modality}
                        salary={post.salary}
                        contact={post.contact}
                        id={post._id}
                        user={post.user_info ? post.user_info : ""}
                        rol={getRol}
                        key={post._id}
                    />
                ) : post.type === "event" ? (
                    <Events
                        description={post.description}
                        technologies={post.technologies}
                        title={post.title}
                        place={post.place}
                        link={post.link}
                        dateEvent={post.dateEvent}
                        id={post._id}
                        user={post.user_info ? post.user_info : ""}
                        rol={getRol}
                        key={post._id}
                    />
                ) : null
            )}
            {/* <p className={style.backUp} onClick={showMorePosts}>
                Ver más
            </p> */}
            <p className={style.addPosts} onClick={showMorePosts}>
                Ver más 

            </p>
        </Fragment>
    );
};

export default Posts;
