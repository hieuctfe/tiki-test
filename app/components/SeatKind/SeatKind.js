import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SeatKind = ({seatKind = []}) => {
  return (
  <ul className="seat-kind-container">
      <li><div className="booked"></div> Đã đặt</li>
      <li><div className="booking"></div> Đang chọn</li>
      {seatKind.map(({name, background, id}) => <li key={id}><div style={{borderColor: background}}></div> {name}</li>)}
  </ul>
)};

SeatKind.propTypes = {
  seatKind: PropTypes.any
};

export default SeatKind;
