import React from "react";
import "./style.css";

const PicCard = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <img alt={props.name} src={props.image} className="imageCard"/>
    </div>
  );

export default PicCard;
