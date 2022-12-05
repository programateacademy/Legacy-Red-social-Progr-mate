import React, {
    Fragment,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import style from "../ProfileEditor.module.css";
import Languages from "./Languages";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import Name from './Name'
import Cohorte from './Cohorte'
import TextArea from "./TextArea";
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
            console.log(e.target.value)
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
                    <div className ={style.form}>
                        <div className={style.column}>
                            <h2>Cohorte: {allCohorts.filter(item => ( item._id === dataUser.cohorte)).map(item => item.cohorte_name)}</h2>
                                <Cohorte nameField={dataUser.cohorte} onChange={selectChange} field={'cohorte'} allCohorts={allCohorts}/>
                        </div>
                    </div>
                    <div className={style.form}>
                        <div className={style.column}>
                            <TextArea nameField={dataUser.description} onChange={onChange} field={'description'} >
                                <h2>Acerca de mi</h2>
                            </TextArea>
                        </div>
                    </div>
                    <div className={style.form}>
                        <h2>Nombre Completo</h2>
                        <div className={style.row_inputs}>
                            <div className={style.column}>
                                <Name className={style.imputProfile} nameField={dataUser.firstName} onChange={onChange} field={'firstName'} >
                                    <h3 className="contentInput">Nombre</h3>
                                </Name>
                            </div>
                            <div className={style.column}>
                                <Name nameField={dataUser.middleName} onChange={onChange} field={'middleName'} >
                                    <h3>Segundo Nombre</h3>
                                </Name>
                            </div>
                        </div>

                        <div className={style.row_inputs}>
                            <div className={style.column}>
                                <Name nameField={dataUser.lastName} onChange={onChange} field={'lastName'} >
                                    <h3>Apellido</h3>
                                </Name>
                            </div>
                            <div className={style.column}>
                                <Name nameField={dataUser.secondSurname} onChange={onChange} field={'secondSurname'} >
                                    <h3>Segundo Apellido</h3>
                                </Name>
                            </div>
                        </div>
                    </div>

                    <div className={style.form}>
                        <h2>Enlaces</h2>
                        <div className={style.row_inputs}>
                            <div className={style.column}>
                                <Name nameField={dataUser.github} onChange={onChange} field={'github'} >
                                    <h3>Github</h3>
                                </Name>
                            </div>
                            <div className={style.column}>
                                <Name nameField={dataUser.portfolio} onChange={onChange} field={'portfolio'} >
                                    <h3>Portafolio</h3>
                                </Name>
                            </div>
                        </div>
                    </div>
                    
                        <div className={style.form}>
                            <h2>Skills</h2>
                            <div className={style.row_inputs}>
                                <div className={style.column}>
                                    <h3>Tecnologías</h3>
                                    <input
                                        type="text"
                                        name="technicalSkills"
                                        onKeyDown={onKeyHardSkills}
                                    />
                                    <div className={style.tags}>
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
                                <div className={style.column}>
                                    <h3>Habilidades blandas</h3>
                                    <input
                                        type="text"
                                        name="softSkills"
                                        onKeyDown={onKeySoftSkills}
                                    />
                                    <div className={style.tags}>
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
                                <div className={style.column}>
                                    <h3>Idiomas</h3>
                                    <input
                                        type="text"
                                        name="lenguages"
                                        onKeyDown={onKeyLanguages}
                                    />
                                    <div className={style.tags} >
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
                            </div>
                        </div>
            </form>
        </Fragment>
    );
};
export default Form_PersonalInfo;
