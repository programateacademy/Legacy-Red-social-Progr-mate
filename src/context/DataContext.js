import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { studyField, experienceField } from "../helpers/formProfile";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const { _id, email } = useSelector((state) => state.auth.user);

    const [dataProfile, setDataProfile] = useState({
        user_info: _id,
        github: "",
        description: "",
        technicalSkills: [],
        softSkills: [],
        lenguages: [],
        prev_studes: [{ ...studyField, id: uuid() }],
        experience: [{ ...experienceField, id: uuid() }],
    });
    const [dataUser, setDataUser] = useState({
        avatar: "",
        cohorte: { num: 1, name: "" },
        contactNumber: null,
        email: "",
        firstName: "",
        lastName: "",
        middleName: "",
        passwordHash: "",
        program: "Progamate",
        rol: 0,
        secondSurname: "",
        state: true,
        _id: _id,
    });
    const [posts, setPosts] = useState({
        user_info: _id,
        likes: [],
        title: "",
        type: "",
        softSkills: [],
        comments: [],
        description: "",
        profile: "",
        images: "",
        company: "",
        salary: "",
        modality: "",
        contact: "",
        input_foro: "",
        link: "",
        tags: "",
        dateEvent: "",
        technologies: [],
        place: "",
    });

    const [postsEvent, setPostsEvent] = useState({
        user_info: _id,
        title: "",
        type: "",
        description: "",
        link: "",
        dateEvent: "",
        technologies: [],
        place: "",
    });
    const [postsJobs, setPostsJobs] = useState({
        user_info: _id,
        title: "",
        type: "",
        company: "",
        technologies: [],
        place: "",
        modality: "",
        salary: "",
        contact: "",
        description: "",
    });

    const [getPosts, setGetPosts] = useState();
    const [getPostsProfile, setGetPostsProfile] = useState();
    const [users, setUsers]  = useState();
    const [postsContext, setPostsContext]  = useState();
    const [filterHome, setFilterHome] = useState("");
    const [avatar, setAvatar] = useState();

    return (
        <DataContext.Provider
            value={{
                dataProfile,
                setDataProfile,
                dataUser,
                setDataUser,
                idUser: _id,
                email,
                users,
                setUsers,
                posts,
                setPosts,
                postsContext,
                setPostsContext,
                postsEvent,
                setPostsEvent,
                postsJobs,
                setPostsJobs,
                getPosts,
                setGetPosts,
                setFilterHome,
                filterHome,
                setGetPostsProfile,
                getPostsProfile,
                avatar,
                setAvatar,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
