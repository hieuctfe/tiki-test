import React from 'react';
import PropTypes from 'prop-types';
import Seat from 'components/Seat';
import './style.scss';

const ReposList = ({seatMap = {}, choosingSeat = () => {}}) => {
  const map = Object.keys(seatMap).map(row =>
    <div key={row} className="seatRow"> 
      { seatMap[row].map(seat => <Seat onChoosing={choosingSeat} onClick="choosingSeat()" key={Math.random()} seatInfo={seat}/>) } 
    </div>
  )

  return map;
};

ReposList.propTypes = {
  seatMap: PropTypes.any,
};

export default ReposList;
