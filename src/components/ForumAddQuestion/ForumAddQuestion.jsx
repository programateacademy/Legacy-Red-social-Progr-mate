import React, { useState, useContext } from "react";
import styles from "./ForumAddQuestion.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sendData } from "../../helpers/fetch";
import { BiMessageAltX } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";
import { TagsInput } from "react-tag-input-component";

import "@pathofdev/react-tag-input/build/index.css"; //Review !
import { useNavigate, useParams} from "react-router-dom";

const ForumAddQuestion = () => {
    let params = useParams()
    const [tags, setTags] = useState([]);
    let navigate = useNavigate();
    const { dataUser, idUser } = useContext(DataContext);
    function getBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }

    return (
        <section className={styles.section}>
            <div className={styles.section__global}>
                <div className={styles.containerYellow}>
                    <h5 className={styles.yellowTitle}>Recuerda que:</h5>
                    <p className={styles.yellowText}>Para realizar una pregunta debes verificar que sea explicativa, clara y si es necesario, busca el vocabulario técnico requerido para que la comunidad pueda resolverla efectivamente.</p>
                </div>
                <div className={styles.containerForum}>
                    <div className={styles.containerTitle}>
                        <h2 className={styles.title}>
                            <BiBox size="25" /> Crear pregunta
                        </h2>
                        <hr className={styles.lineTitle} />
                    </div>
                    <Formik
                        initialValues={{
                            title: "",
                            description: "",
                            tags: [],
                            images: "",
                            type: "questions",
                            user_info: params.user,
                        }}
                        validate={(valores) => {
                            let errores = {};

                            // Validacion title
                            if (!valores.title) {
                                errores.title = "Por favor ingresa un titulo";
                            }

                            if (!valores.description) {
                                errores.description =
                                    "Por favor escriba su aporte";
                            }

                            if (valores.images.size > 75000) {
                                errores.images = "La foto es demasiado pesada";
                            }
                            return errores;
                        }}
                        onSubmit={async (valores, { resetForm }) => {
                            valores.tags = tags;
                            setTags([]);
                            resetForm();
                            await sendData("posts", valores);
                            navigate("/questions");
                        }}
                    >
                        {({ errors, setFieldValue }) => (
                            <Form className={styles.forumAdd}>
                                <label htmlFor="title">
                                    Titulo de la pregunta
                                </label>
                                <Field
                                    type="text"
                                    id="title"
                                    name="title"
                                    className={styles.inputs}
                                />
                                <ErrorMessage
                                    name="title"
                                    component={() => (
                                        <div className={styles.error}>
                                            <BiMessageAltX
                                                color="red"
                                                size="18"
                                            />
                                            {errors.title}
                                        </div>
                                    )}
                                />

                                <label htmlFor="description">
                                    Escribe tu pregunta
                                </label>
                                <Field
                                    name="description"
                                    as="textarea"
                                    id="description"
                                    className={styles.textArea}
                                />
                                <ErrorMessage
                                    name="description"
                                    component={() => (
                                        <div className={styles.error}>
                                            <BiMessageAltX
                                                color="red"
                                                size="18"
                                            />
                                            {errors.description}
                                        </div>
                                    )}
                                />

                                <label htmlFor="tag">Agregar etiquetas</label>
                                <TagsInput
                                    value={tags}
                                    onChange={setTags}
                                    name="tags"
                                    placeHolder="Ingrese las etiquetas"
                                />
                                <em>Presionar enter para agregar</em>
                                <label htmlFor="image">Añadir imagen</label>
                                <input
                                    name="images"
                                    type="file"
                                    id="image"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "images",
                                            event.target.files[0]
                                        );
                                    }}
                                />
                                <ErrorMessage
                                    name="images"
                                    component={() => (
                                        <div className={styles.error}>
                                            <BiMessageAltX
                                                color="red"
                                                size="18"
                                            />
                                            {errors.images}
                                        </div>
                                    )}
                                />
                                <div className={styles.btnAsk}>
                                <button className={styles.btnAdd} type="submit">
                                    Preguntar
                                </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default ForumAddQuestion;