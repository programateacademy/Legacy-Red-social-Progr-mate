import React, {
    Fragment,
    useContext,
    useEffect,
    useRef,
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
    const { dataUser, setDataUser, idUser } = useContext(DataContext);
    const params = useParams();
    const [technical, setTechnical] = useState([]);
    const [softSkills, setsoftSkills] = useState([]);
    const [languages, setLanguages] = useState([]);

    // console.log(idUser)

    const onChange = ({ target }) => {
        // console.log(dataUser);
        const { name, value } = target;
        setDataUser({
            ...dataUser,
            [name]: value,
        });
    };
    // useEffect(() => {
    //     setDataUser({
    //         ...dataUser,
    //         user_info: id,
    //     })
    // }, [])
    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setDataUser({
                ...dataUser,
                technicalSkills: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    const onKeySoftSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            const addTech = softSkills.push(e.target.value);
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
            // console.log(languages);

            e.preventDefault();
        }
    };

    useEffect(async () => {
        if (params.id) {
            try {
                const data = await getDataAll("users");
                const filter = data.filter(
                    (prof) => prof.user_info._id === idUser
                );
                // console.log(filter[0]);
                setDataUser(filter[0]);
                setLanguages(filter[0].lenguages);
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
                {/* <div className={style.forms}>
                    <h3>Nombre *</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="name"
                        value={dataUser.name}
                        // onChange={onChange}
                    />
                </div> */}

                <div className={style.forms}>
                    <h3>Link de Git Hub</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="github"
                        value={dataUser.github}
                        onChange={onChange}
                    />
                </div>

                {/* <div className={style.forms}>
                    <h3>Cohorte *</h3>
                    <select
                        className={style.nom}
                        name="cohorte"
                        defaultValue="0"
                        // onChange={onSelectChange}
                    >
                        <option value="0">Cohorte</option>
                        <option value="1">Primeros</option>
                        <option value="2">Quackoders</option>
                    </select> */}
                {/* <input
                        className={style.nom}
                        type="text"
                        name="cohorte"
                        value={dataUser.cohorte}
                        onChange={onChange}
                    /> */}
                {/* </div> */}

                <div className={style.forms}>
                    <h3>Acerca de</h3>
                    <textarea
                        className={style.textarea}
                        rows="3"
                        name="description"
                        value={dataUser.description}
                        onChange={onChange}
                    ></textarea>
                </div>

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
                        // ref={targetSkill}
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
