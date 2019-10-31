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
        <h2>{props.itinerary.name}</h2>
        <div>
          Likes:{props.itinerary.likes} {props.itinerary.time} hours{" "}
          {props.itinerary.price}{" "}
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
