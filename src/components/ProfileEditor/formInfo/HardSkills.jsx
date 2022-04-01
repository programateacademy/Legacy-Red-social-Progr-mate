import React, { useContext } from "react";
import { BiX } from "react-icons/bi";

const HardSkills = ({ skill, technical, setTechnical, dataUser, setDataUser}) => {
    

    const deleteSkill = (e) => {
        e.preventDefault();

        console.log(technical);
        const tech = technical.filter((t) => t !== skill);
        setTechnical(tech);
        setDataUser({
            ...dataUser,
            technicalSkills: tech,
        });
    };
    return (
        <button onClick={deleteSkill}>
            {skill} <BiX />
        </button>
    );
};

export default HardSkills;
