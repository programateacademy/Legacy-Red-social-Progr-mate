import React from "react";
import style from "./RenderPostHome.module.css";
import news from "../../news.json";
import { RenderPostGrid } from "./RenderPostGrid";

/* This is the father component of the news */

const RenderPostHome = () => {
    //const imageNews = news.image_new;
    const getTest = async () => {
        const url = `https://redsocialprogramate.herokuapp.com/api/users`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    };
    
    console.log(getTest())

    return (
        <section className={style.section}>
            <div className={style.cardContainer}>
            {news.map((post) => (
                <RenderPostGrid
                    key={post.id}
                    avatar={post.avatar}
                    name_person={post.name_person}
                    cohort={post.cohort}
                    time={post.time}
                    image={post.image}
                    news={post.news}
                />
            ))}
            </div>
        </section>
    );
};

export default RenderPostHome;
