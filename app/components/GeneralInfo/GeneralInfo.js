import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Background from './image/firm-bd.png';
import moment from 'moment';


function currencyFormat(money = 0) {
  return new Intl.NumberFormat('vn-VN', {
    style: 'currency', currency: 'VND'
  }).format(money);
}

function timeFormat(startTime = new Date()) {
  return moment(startTime).format('lll');
}

function numberOfbooked(seatMap) {
  let bookedInfo = {
    total: 0,
    booked: 0
  }
  bookedInfo.booked = Object.keys(seatMap).reduce((total, row) => total + seatMap[row].reduce((totalRow, seat) => {
    if (seat.name && seat.isBooked) totalRow++
    if (seat.name) bookedInfo.total++
    return totalRow
  }, 0),
    0)
  return bookedInfo
}

const GeneralInfo = ({ firmInfo, choosingSeat = [] }) => {
  let result = {}
  if (choosingSeat.length) {
    choosingSeat = JSON.parse(JSON.stringify(choosingSeat))
    result = choosingSeat.reduce((results, current) => {
      if (!results) result = {}
      results.price += current.price;
      results.seats += `${current.name} `;
      return results;
    }, { price: 0, seats: "" })
  }

  return (
    <div className="general-info" style={{ backgroundImage: `url(${Background})`, }}>
      <div className="firm-poster">
        <img src={firmInfo.poster} />
      </div>
      <div className="firm-name info">
        {firmInfo.name}
      </div>
      <div className="seat-time-info">
        <div>
          <div>Rạp:</div>
          <div>{firmInfo.location}</div>
        </div>
        <div>
          <div>Suất chiếu:</div>
          <div>{timeFormat(firmInfo.startTime)}</div>
        </div>
        <div>
          <div>Ghế:</div>
          <div>{result.seats}</div>
        </div>
        <div>
          <div>Còn:</div>
          <div>{numberOfbooked(firmInfo.seatMap).booked} / {numberOfbooked(firmInfo.seatMap).total}</div>
        </div>
      </div>
      <div className="cenima info">
        <div>Giá: {currencyFormat(result.price)}</div>
      </div>
    </div>
  )
};

GeneralInfo.propTypes = {
};

export default GeneralInfo;
