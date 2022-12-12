import React from "react";
import { useEffect, useState } from "react";
import FormJobs from "../FormJobs/FormJobs";
import FormNews from "../FormNews/Formnews";
import FormEvent from "../FormEvent/FormEvent";
import Icon_news from "../../assets/icons/Icon_new"
import Icon_events from "../../assets/icons/Icon_events"
import Icon_job from "../../assets/icons/Icon_job";
const Makingpost = () => {
    let [postType, setPostType] = useState("")
    useEffect(() => {
        setPostType("jobs")
    }, [])

    // Check the type of post and return the matched component
    const checkPostType = (post) => {
        switch (post) {
            case "jobs":
                return <FormJobs />
            case "events":
                return <FormEvent />
            case "news":
                return <FormNews />
        }
    }
    return (
        <>
            <div className="containerpost">
                {checkPostType(postType)}
                <li onClick={() => { setPostType("news") }}>
                    <Icon_news />
                    <p>news</p>
                </li>
                <li onClick={() => { setPostType("events") }}>
                    <Icon_events />
                    <p>news</p>
                </li>
                <li onClick={() => { setPostType("jobs") }}>
                    <Icon_job />
                    <p>news</p>
                </li>
            </div>
        </>
    );
};

export default Makingpost;