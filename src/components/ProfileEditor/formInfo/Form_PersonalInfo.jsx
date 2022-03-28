import React, {
    Fragment,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import style from "./Form_PersonalInfo.module.css";
import Languages from "./Languages";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const Form_PersonalInfo = ({dataUser, setDataUser}) => {
    const [technical, setTechnical] = useState([]);
    const [softSkills, setsoftSkills] = useState([]);
    const [languages, setLanguages] = useState([]);

    
    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setDataUser({
                ...dataUser,
                technicalSkills: technical,
            });
            e.target.value = "";
            e.preventDefault();
            console.log(dataUser)
        }
        
    };

    const onKeySoftSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            softSkills.push(e.target.value);
            setDataUser({
                ...dataUser,
                softSkills: softSkills,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    // let targetSkill = useRef("null");
    const onKeyLanguages = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            languages.push(e.target.value);
            setDataUser({
                ...dataUser,
                lenguages: languages,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    useEffect(async () => {
        setLanguages(dataUser.languages);
        setsoftSkills(dataUser.softSkills);
        setTechnical(dataUser.technicalSkills);
    }, [dataUser]);
    return (
        <Fragment>
            <form className={style.form_container}>
                {/* <div className={style.forms}>
                    <h3>Link de Git Hub</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="github"
                        onChange={onChange}
                    />
                </div>

                <div className={style.forms}>
                    <h3>Acerca de</h3>
                    <textarea
                        className={style.textarea}
                        rows="3"
                        name="description"
                        onChange={onChange}
                    ></textarea>
                </div> */}

                <div className={style.forms}>
                    <h3>Tecnologías</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technicalSkills"
                        onKeyDown={onKeyHardSkills}
                    />
                    <div className={style.tecnologias} id="technologias">
                        {technical.map((skill, index) => (
                            <HardSkills
                                skill={skill}
                                key={index}
                                technical={technical}
                                setTechnical={setTechnical}
                                dataUser={dataUser}
                                setDataUser={setDataUser}
                            />
                        ))}
                    </div>
                </div>
                <div className={style.forms}>
                    <h3>Habilidades blandas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="softSkills"
                        onKeyDown={onKeySoftSkills}
                    />
                    <div className={style.tecnologias}>
                        {softSkills.map((skill, index) => (
                            <SoftSkills
                                skill={skill}
                                key={index}
                                softSkills={softSkills}
                                setsoftSkills={setsoftSkills}
                                dataUser={dataUser}
                                setDataUser={setDataUser}
                            />
                        ))}
                    </div>
                </div>
                <div className={style.forms}>
                    <h3>Idiomas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="lenguages"
                        onKeyDown={onKeyLanguages}
                    />
                    <div
                        className={style.tecnologias}
                        id="languages"
                    >
                        {languages.map((skill, index) => (
                            <Languages
                                skill={skill}
                                key={index}
                                languages={languages}
                                setLanguages={setLanguages}
                                dataUser={dataUser}
                                setDataUser={setDataUser}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </Fragment>
    );
};
export default Form_PersonalInfo;