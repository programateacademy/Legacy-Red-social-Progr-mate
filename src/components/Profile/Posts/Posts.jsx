import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { getDataAll } from "../../../helpers/fetch";

import { useParams } from "react-router-dom";
import JobsProfile from "./JobsProfile";
import NewsProfile from "./NewsProfile";
import EventsProfile from "./EventsProfile";


const Posts = ({dataUserProfile}) => {
    const { setGetPostsProfile, getPostsProfile } =
        useContext(DataContext);

    const { firstName, middleName, lastName, cohorte, avatar } = dataUserProfile;

    const params = useParams();

    useEffect(async () => {
        try {
            const data = await getDataAll("posts");
            if (!params.id) {
                const filterData = data.filter(
                    (posts) => posts.user_info === dataUserProfile._id
                );
                setGetPostsProfile(filterData.reverse());
            } else {
                const filterData = data.filter(
                    (posts) => posts.user_info === params.id
                );
                setGetPostsProfile(filterData.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    }, [dataUserProfile]);

    return (
        <>
            {getPostsProfile?.map((post) =>
                post.type === "news" ? (
                    <NewsProfile
                        description={post.description}
                        images={post.image}
                        technologies={post.technologies}
                        title={post.title}
                        id={post._id}
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
                        key={post._id}
                        user={post.user_info}
                    />
                ) : post.type === "jobs" ? (
                    <JobsProfile
                        description={post.description}
                        technologies={post.technologies}
                        softSkills={post.softSkills}
                        title={post.title}
                        company={post.company}
                        place={post.place}
                        modality={post.modality}
                        salary={post.salary}
                        contact={post.contact}
                        id={post._id}
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
                        key={post._id}
                        user={post.user_info}
                    />
                ) : post.type === "event" ? (
                    <EventsProfile
                        description={post.description}
                        technologies={post.technologies}
                        title={post.title}
                        place={post.place}
                        link={post.link}
                        dateEvent={post.dateEvent}
                        id={post._id}
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
                        key={post._id}
                        user={post.user_info}
                    />
                ) : null
            )}
        </>
    );
};

export default Posts;
