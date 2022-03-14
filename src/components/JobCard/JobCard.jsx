import React from "react";
import style from "./JobCard.module.css";
import jobs from "../../jobvacancies.json";
import { JobCardS } from "./JobCardS";

/* This is the father of job card component */

const JobCard = () => {
    return (
        <section className={style.section}>
            <div className={style.cardContainer}>
            {jobs.map((vacancies) => (
                <JobCardS
                    key={vacancies.id}
                    avatar={vacancies.avatar}
                    user_info={vacancies.user_info}
                    cohort={vacancies.cohort}
                    time={vacancies.time}
                    title={vacancies.title}
                    type={vacancies.type}
                    description={vacancies.description}
                    softSkills={vacancies.softSkills}
                    place={vacancies.place}
                    modality={vacancies.modality}
                    company={vacancies.company}
                    salary={vacancies.salary}
                    contact={vacancies.contact}
                />
            ))}
            </div>
        </section>
    );
};

export default JobCard;
