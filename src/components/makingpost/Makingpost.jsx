import React from "react";
import { useEffect,useState } from "react";
import FormJobs from "../FormJobs/FormJobs";
import Formnews from "../Formnews/Formnews";
import FormEvent from "../FormEvent/FormEvent";

const Makingpost = () => {
    let {postType, setPostType} = useState({})
    useEffect(() =>{
        setPostType({type: "jobs"})
    },[])


// Check the type of post and return the matched component
    const checkPostType = (post) => {
        switch(post.type) {
            case jobs:
                return <FormJobs/>
            case events:
                return <FormEvent/>
            case news:
                return <Formnews/>
    }
}
    return (
        <>
            <div>
                <textarea>Algo que quieras compartir ? </textarea>
                {checkPostType(postType)}
                <button>
                    
                </button>
            </div>
        </>
    );
};

export default Makingpost;