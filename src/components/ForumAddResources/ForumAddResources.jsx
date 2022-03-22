import React, { useState } from "react";
import styles from "./ForumAddResources.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sendData } from "../../helpers/fetch";
import { BiMessageAltX } from "react-icons/bi";
import { BiBox } from "react-icons/bi";

import ReactTagInput from "@pathofdev/react-tag-input"; 
//import "@pathofdev/react-tag-input/build/index.css"; //Review !

const ForumAddResources = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const [tags, setTags] = useState([]);
    return (
        <section className={styles.section}>
            <div className={styles.section__global}>
                <div className={styles.containerForum}>
                    <div className={styles.containerTitle}>
                        <h2 className={styles.title}>
                            <BiBox size="25" /> Crear recurso
                        </h2>
                        <hr className={styles.lineTitle} />
                    </div>
                    <Formik
                        initialValues={{
                            title: "",
                            input_foro: "",
                            description: "",
                            images: "",
                            tags: [],
                        }}
                        validate={(valores) => {
                            let errores = {};

                            // Validacion title
                            if (!valores.title) {
                                errores.title = "Por favor ingresa un titulo";
                            }

                            if (!valores.input_foro) {
                                errores.input_foro =
                                    "Por favor ingrese el tipo de aporte";
                            }

                            if (!valores.description) {
                                errores.description =
                                    "Por favor escriba su aporte";
                            }

                            if (valores.images.size > 200000) {
                                errores.images = "La foto es demasiado pesada";
                            }
                            return errores;
                        }}
                        onSubmit={async (valores, { resetForm }) => {
                            valores.tags = tags;
                            setTags([]);
                            resetForm();
                            // console.log(valores)
                            // await sendData("posts", valores);
                            setTimeout(
                                () => cambiarFormularioEnviado(false),
                                3000
                            );
                        }}
                    >
                        {({ errors, setFieldValue }) => (
                            <Form className={styles.forumAdd}>
                                <label htmlFor="title">
                                    Titulo del recurso
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

                                <label htmlFor="input_foro">
                                    Tipo de aporte
                                </label>
                                <Field
                                    name="input_foro"
                                    as="select"
                                    id="input_foro"
                                    className={styles.inputSelect}
                                >
                                    <option value="">
                                        Seleccione una opción
                                    </option>
                                    <option value="Tutorial">Tutorial</option>
                                    <option value="Libro">Libro</option>
                                    <option value="Video">Video</option>
                                    <option value="Enlace">Enlace</option>
                                    <option value="Curso">Curso</option>
                                </Field>
                                <ErrorMessage
                                    name="input_foro"
                                    component={() => (
                                        <div className={styles.error}>
                                            <BiMessageAltX
                                                color="red"
                                                size="18"
                                            />
                                            {errors.input_foro}
                                        </div>
                                    )}
                                />

                                <label htmlFor="description">
                                    Escribe tu aporte
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

                                <label htmlFor="description">
                                    Agregar etiquetas
                                </label>
                                <ReactTagInput
                                    tags={tags}
                                    placeholder="Type and press enter"
                                    onChange={(newTags) => setTags(newTags)}
                                />
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
                                <button className={styles.btnAdd} type="submit">
                                    Publicar recurso
                                </button>
                                {formularioEnviado && (
                                    <p className="exito">
                                        Formulario enviado con exito!
                                    </p>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default ForumAddResources;
