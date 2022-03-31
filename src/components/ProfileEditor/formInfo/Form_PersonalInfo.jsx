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
import Name from './Name'
import Cohorte from './Cohorte'
const Form_PersonalInfo = ({dataUser, setDataUser, allCohorts}) => {
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

    
    const onChange = (e) => {
        if (e.key === "Enter") {
            setDataUser({
                ...dataUser,
                [e.target.name]: e.target.value,
            });
            e.target.value = '';
            e.preventDefault();
        }
    };
    const selectChange = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value,
        });
        e.preventDefault();
        console.log('allName()');
    }
    useEffect(async () => {
        setLanguages(dataUser.languages);
        setsoftSkills(dataUser.softSkills);
        setTechnical(dataUser.technicalSkills);
    }, [dataUser]);

    
    return (
        <Fragment>
            <form className={style.form_container}>
                <div className={style.forms}>
                    <Name nameField={dataUser.firstName} onChange={onChange} field={'firstName'} >
                        <h3>Nombre</h3>
                    </Name>
                </div>
                <div className={style.forms}>
                    <Name nameField={dataUser.middleName} onChange={onChange} field={'middleName'} >
                        <h3>Segundo Nombre</h3>
                    </Name>
                </div>
                <div className={style.forms}>
                    <Name nameField={dataUser.lastName} onChange={onChange} field={'lastName'} >
                        <h3>Apellido</h3>
                    </Name>
                </div>
                <div className={style.forms}>
                    <Name nameField={dataUser.secondSurname} onChange={onChange} field={'secondSurname'} >
                        <h3>Segundo Apellido</h3>
                    </Name>
                </div>
                <div className={style.forms}>
                    <Name nameField={dataUser.github} onChange={onChange} field={'github'} >
                        <h3>Github</h3>
                    </Name>
                </div>
                <div className={style.forms}>
                    <Cohorte nameField={dataUser.cohorte} onChange={selectChange} field={'cohorte'} allCohorts={allCohorts}>
                        <h3>Cohorte: {allCohorts.filter(item => ( item._id === dataUser.cohorte)).map(item => item.cohorte_name)}</h3>
                    </Cohorte>
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
