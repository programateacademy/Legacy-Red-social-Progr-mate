import React, { useContext, useEffect } from "react";
import LazyLoad from 'react-lazy-load';
import News from "../homePublications/News";
import Jobs from "../homePublications/Jobs";
import Events from "../homePublications/Events";
import { getData, getDataAll } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";
import { useState } from "react";
import style from "../homePublications/Posts.module.css";
import SkeletonPost from "../SkeletonPost/SkeletonPost";
import Footer from "../Footer/Footer";
const FilterPosts = (props) => {
    const { postType } = props;
    const { setGetPosts, idUser } =
        useContext(DataContext);

    // const [dataUsers, setDataUsers] = useState([]);
    // const [quantityPosts, setQuantityPosts] = useState(35);
    const [getRol, setGetRol] = useState(1);
    const [data, setData] = useState([])
    const fetchDataPosts = async () => {

        const data = await getDataAll("posts")
        const filterData = await data.filter((post) => post.type === postType)
        setData(filterData.reverse())


    }
    useEffect(async () => {
        let isMounted = true
        const getData = async () => {
            if (isMounted) {
                try {
                    fetchDataPosts();

                } catch (error) {
                    console.log(error);
                }
            }
        }
        getData();
        return () => {
            isMounted = false;
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

    useEffect(async () => {
        let isMounted = true;
        const getData = async () => {
            if (isMounted) {
                try {
                    const data = await getDataAll("posts");
                    setGetPosts(data.reverse());
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getData();
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <div className={style.containerFilter}>
            <div className={style.postFilters}>
                {data.length ?
                    <>
                        {data?.map((post) =>
                            post.type === "news" ? (
                                <LazyLoad threshold={0.95}>
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
                                </LazyLoad>
                            ) : post.type === "jobs" ? (
                                <LazyLoad threshold={0.95}>
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
                                </LazyLoad>
                            ) : post.type === "event" ? (
                                <LazyLoad threshold={0.95}>
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
                                </LazyLoad>
                            ) : null
                        )}
                    </>
                    :
                    [...Array(5)].map((x, i) => (
                        <SkeletonPost key={i} />
                    ))}


            </div>
            <Footer />
        </div>
    );
};

export default FilterPosts;
