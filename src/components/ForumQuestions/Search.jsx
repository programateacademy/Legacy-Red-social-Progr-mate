import React from "react";
import styles from "./ForumQuestions.module.css";
import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataAll } from "../../helpers/fetch";

export const Search = ({
    setQuestions,
    questions,
    allQuestions,
    filterTag,
}) => {
    const [searchText, setSearchText] = useState("");
    const [getUsers, setGetUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        const getUser =async() => {
            const data = await getDataAll("users");
            if (isMounted) {setGetUsers(data);}
        }
        getUser()
        return () => {
            isMounted = false;
        }
    }, []);

    const filteredUser = () => {
        const filteredUser = getUsers.filter((user) =>
            user?.firstName
                .concat(" ", user?.lastName)
                .toLowerCase()
                .includes(searchText)
        );

        return filteredUser;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.length !== 0) {
            const filteredForum = questions.filter(
                (item) =>
                    item?.title?.toLowerCase().includes(searchText) ||
                    item?.tags
                        ?.map((quest) => quest.toLowerCase())
                        .includes(searchText) ||
                    filteredUser()
                        .map((user) => user._id)
                        .includes(item?.user_info)
            );
            setQuestions(filteredForum);
        } else {
            allQuestions();
        }

        // navigate("/questions?search=" + searchText);
    };

    useEffect(() => {
        let isMounted = true
        const filterQuestions = async () =>{const filteredForum = questions.filter((item) =>
            item?.tags
                ?.map((quest) => quest.toLowerCase())
                .includes(filterTag.toLowerCase())
        );
        if (isMounted) {await setQuestions(filteredForum)};}
        filterQuestions()
        return () => {
            isMounted = false;
        }
    }, [filterTag]);

    return (
        <>
            <form className={styles.searchContainer} onSubmit={handleSubmit}>
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Buscar pregunta"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>
                        <BiSearch size="20" />
                    </button>
                </div>
                <p
                    className={styles.clearFilter}
                    onClick={() => allQuestions()}
                >
                    Limpiar filtro
                </p>
            </form>
        </>
    );
};
