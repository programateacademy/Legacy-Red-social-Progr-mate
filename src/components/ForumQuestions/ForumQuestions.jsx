import React, { useEffect, useState } from "react";
import styles from "./ForumQuestions.module.css";
import { Question } from "./Question";
import { RiQuestionLine } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { BiMessageAdd } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDataAll, getData } from "../../helpers/fetch";
import { Search } from "./Search";

function useQuery() {
    return new URLSearchParams(useLocation().search); 
}
const ForumQuestions = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let isMounted = true
        const usersFetch = async() => {const data = await getDataAll(`users`);
        if (isMounted) {setUsers(data)}}
        usersFetch()
        return () => {
            isMounted = false;
        }
    }, []);

    const [questions, setQuestions] = useState([]);
    const [filterTag, setFilterTag] = useState("");
    const [dropdown, setDropdown] = useState(false);

    const query = useQuery();
    const search = query.get("search");

    const allQuestions = async () => {
        const searchUrl = search ? "?title=" + search : "?type=questions";
        const data = await getDataAll(`posts${searchUrl}`);
        setQuestions(data.reverse());
    };

    // get the questions to the page 
    useEffect(() => {
        let isMounted = true
        const questions = async () => {
            if (isMounted) {allQuestions();}
        };
        questions();
        return () => {
            isMounted = false;
        }
    }, [search]);
// This function filter the name and avatar of each question.
    const filterPostCreator = (id, key) => {
        const user = users.filter((user) => user._id === id);
        const userFilter = user[0];
        if (userFilter) {
            return key?`${userFilter.firstName}  ${userFilter.lastName}`: `${userFilter.avatar}`;
        }
    };
    console.log(questions)
    return (
        <section
            className={styles.section}
            onClick={() => {
                dropdown && setDropdown(false);
            }}
        >
        
            <div className={styles.section__global}>

                <div className={styles.section__options}>
                    <Search
                        setQuestions={setQuestions}
                        questions={questions}
                        allQuestions={allQuestions}
                        filterTag={filterTag}
                        dropdown={dropdown}
                    />
                    <div className={styles.btn__container}>
                        <Link
                            to="/addquestion"
                            className={styles.btn__question}
                        >
                            Preguntar <BiMessageAdd/>
                        </Link>

              <button
                className={styles.btn__question}
                onClick={() => setDropdown(!dropdown)}
              >
                Filtro <BiFilterAlt />
              </button>

              {dropdown && (
                <div className={styles.dropdown_content}>
                  <div
                    className={styles.dropdown_item}
                    onClick={() => allQuestions()}
                  >
                    Limpiar filtro
                  </div>

                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    HTML
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    CSS
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Bootstrap
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Tailwind
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    JavaScript
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    React
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Angular
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    VueJs
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    NodeJs
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Express
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Java
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Python
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    MongoDB
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    MySQL
                  </div>
                  <div
                    className={styles.dropdown_item}
                    onClick={(e) => setFilterTag(e.target.innerText)}
                  >
                    Blockchain
                  </div>
                </div>
              )}
            </div>
            <div>
            <div className={styles.section__head}>
                    <h1 className={styles.section__title}>
                        FORO ALUMNI
                        <RiQuestionLine size="22" />
                    </h1>
                    <hr className={styles.section__lineTitle} />
                </div>
            </div>
            <div className={styles.questionAnswer}>
              <p>{questions.length} preguntas</p>
            </div>
          </div>
          <div className={styles.section__container}>
            {questions.map((data) => (
              <Question key={data._id} data={data} name={filterPostCreator} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default ForumQuestions;
