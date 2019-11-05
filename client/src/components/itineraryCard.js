import React from "react";
import randomUser from "../assets/random-user.png";

function ItineraryCard(props) {
  return (
    <div className="itinerary-card">
      <div className="profileInfo">
        <div className="profilePic">
          <img src={randomUser} alt="profile pic" />
        </div>
        <div>{props.itinerary.user_name}</div>
      </div>
      <div className="itinieraryInfo">
        <h4 className="h4">{props.itinerary.name}</h4>
        <div className="moreInfo">
          <span>Likes: {props.itinerary.likes}</span>
          <span>{props.itinerary.time} hours</span>
          <span>{props.itinerary.price}</span>
        </div>
        <div>
          {props.itinerary.hashtags.map((hashtag, i) => (
            <span key={i}>#{hashtag} </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItineraryCard;
