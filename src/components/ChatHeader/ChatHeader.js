import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './ChatHeader.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
     
    </div>
  </div>
);

export default InfoBar;