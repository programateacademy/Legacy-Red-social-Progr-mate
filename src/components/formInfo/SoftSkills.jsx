import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";

const SoftSkills = ({ skill, softSkills, setsoftSkills }) => {
    const { dataProfile, setDataProfile } = useContext(DataContext);

    const deleteSkill = (e) => {
        e.preventDefault();

        const soft = softSkills.filter((s) => s !== skill);
        setsoftSkills(soft);
        setDataProfile({
            ...dataProfile,
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
