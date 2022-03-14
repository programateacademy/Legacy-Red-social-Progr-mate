import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";

const HardSkills = ({ skill, technical, setTechnical, index }) => {
    const { posts, setPosts } = useContext(DataContext);

    const deleteSkill = (e) => {
        e.preventDefault();

        const tech = technical.filter((t) => t !== skill);
        setTechnical(tech);
        setPosts({
            ...posts,
            technologies: tech,
        });
    };
    return (
        <button onClick={deleteSkill} id={index}>
            {skill} <BiX id={index} />
        </button>
    );
};

export default HardSkills;
