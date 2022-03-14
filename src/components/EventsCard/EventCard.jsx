import React from "react";
import style from "./eventCard.module.css";
import events from "../../events.json";
import { EventCardSon } from "./EventCardSon";

/* This is the father component of Event Card => View Home */
const EventCard = () => {
    return (
        <div className={style.cardContainer}>
            {events.map((props) => (
                <EventCardSon
                    key={props.id}
                    avatar={props.avatar}
                    user_info={props.user_info}
                    cohort={props.cohort}
                    time={props.time}
                    title={props.title}
                    type={props.type}
                    image={props.image}
                    description={props.description}
                    link={props.link}
                    dateEvent={props.dateEvent}
                    place={props.place}
                />
            ))}
        </div>
    );
};

export default EventCard;
