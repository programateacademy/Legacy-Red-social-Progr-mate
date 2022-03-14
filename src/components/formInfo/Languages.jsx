import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";

const Languages = ({ skill, languages, setLanguages }) => {
    const { dataProfile, setDataProfile } = useContext(DataContext);

    const deleteSkill = (e) => {
        e.preventDefault();
        const lang = languages.filter((tech) => tech !== skill);
        setLanguages(lang);
        setDataProfile({
            ...dataProfile,
            lenguages: lang,
        });
    };
    return (
        <button onClick={deleteSkill}>
            {skill} <BiX />
        </button>
    );
};

export default Languages;
