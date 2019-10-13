import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Seat = ({seatInfo, onChoosing}) => {
  let {name, background, color, isBooked, isBooking} = seatInfo;
  let className = "seat";
  className = name ? "seat" : "way"
  if (isBooked) className += " booked";
  if (isBooking) className += " booking";
  // render color dynamic by kind of color in model
  return (<div onClick={(isBooked || !name) ? () => {} : onChoosing.bind(null,seatInfo)} 
               style={{borderColor: background}} 
               className={className}>
               {name}
          </div>
)};

Seat.propTypes = {
  seatInfo: PropTypes.any
};

export default Seat;
