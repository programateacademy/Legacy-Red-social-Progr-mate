import React from "react";
import { BiX } from "react-icons/bi";
const SoftSkills = ({ skill, softSkills, setsoftSkills, dataUser, setDataUser }) => {


    const deleteSkill = (e) => {
        e.preventDefault();

        console.log(softSkills);
        const soft = softSkills.filter((s) => s !== skill);
        setsoftSkills(soft);
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

export default SoftSkills;

