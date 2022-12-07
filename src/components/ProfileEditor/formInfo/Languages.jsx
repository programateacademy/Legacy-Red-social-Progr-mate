import React from "react";
import { BiX } from "react-icons/bi";

const Languages = ({ skill, languages, setLanguages, dataUser, setDataUser }) => {


    const deleteSkill = (e) => {
        e.preventDefault();
        const lang = languages.filter((tech) => tech !== skill);
        setLanguages(lang);
        setDataUser({
            ...dataUser,
            languages: lang,
        });
    };
    return (
        <button onClick={deleteSkill}>
            {skill} <BiX />
        </button>
    );
};

export default Languages;
