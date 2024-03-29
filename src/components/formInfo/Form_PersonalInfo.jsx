import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";

import style from "./Form_PersonalInfo.module.css";
import Languages from "./Languages";
import { DataContext } from "../../context/DataContext";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import { useParams } from "react-router-dom";
import { getDataAll } from "../../helpers/fetch";

const Form_PersonalInfo = () => {
    const { dataProfile, setDataProfile, idUser } = useContext(DataContext);
    const params = useParams();
    const [technical, setTechnical] = useState([]);
    const [softSkills, setsoftSkills] = useState([]);
    const [languages, setLanguages] = useState([]);



    const onChange = ({ target }) => {
        // console.log(dataProfile);
        const { name, value } = target;
        setDataProfile({
            ...dataProfile,
            [name]: value,
        });
    };
    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setDataProfile({
                ...dataProfile,
                technicalSkills: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    const onKeySoftSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            softSkills.push(e.target.value);
            setDataProfile({
                ...dataProfile,
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
            setDataProfile({
                ...dataProfile,
                lenguages: languages,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    useEffect(async () => {
        if (params.id) {
            try {
                const data = await getDataAll("users");
                /* obtain user data*/
                const filter = data.filter(
                    (prof) => prof._id === idUser
                );
                setDataProfile(filter[0]);
                setLanguages(filter[0].languages);
                setsoftSkills(filter[0].softSkills);
                setTechnical(filter[0].technicalSkills);
            } catch (error) {
                console.log(error);
            }
        }
    }, []);
    return (
        <Fragment>
            <form className={style.form_container}>
                <div className={style.forms}>
                    <h3>Link de Git Hub</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="github"
                        onChange={onChange}
                    />
                </div>
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
                </div>
 */}
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
                            />
                        ))}
                    </div>
                </div>
            </form>
        </Fragment>
    );
};
export default Form_PersonalInfo;
