import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import styles from "./ForumViewResource.module.css";

const ForumViewResource = () => {
    const { resourceId } = useParams();
    // console.log(resourceId)
    return (
        <div>
            <h1>Detalle recursos</h1>
        </div>
    );
};

export default ForumViewResource;
