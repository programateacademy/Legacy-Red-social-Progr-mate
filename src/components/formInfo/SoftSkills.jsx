import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";

const JobSoftSkills = ({ skill, softSkill, setsoftSkill }) => {
    const { dataUser, setDataUser } = useContext(DataContext);

    const deleteSkill = (e) => {
        e.preventDefault();

        const soft = softSkill.filter((s) => s !== skill);
        setsoftSkill(soft);
        setDataUser({
            ...dataUser,
            softSkills: soft,
        });
    };
    return (
        <button onClick={deleteSkill}>
            {skill} <BiX />
        </button>
    );
};

export default JobSoftSkills;
