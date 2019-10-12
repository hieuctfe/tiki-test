import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Background from './image/firm-bd.png';


function currencyFormat(money = 0) {
  return new Intl.NumberFormat('vn-VN', { 
    style: 'currency', currency: 'VND' 
  }).format(money);
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
    },{price: 0, seats:""})
  }
  return (
    <div className="general-info" style={{ backgroundImage: `url(${Background})`,}}>
      <div className="firm-poster">
        <img src="https://lorempixel.com/100/100" />
      </div>
      <div className="firm-name info">
        {firmInfo.name}
      </div>
      <div className="">
        <div>Rạp:</div>
        <div>Suất chiếu:</div>
        <div>Ghế:</div>
      </div>
      <div className="cenima info">
        <div>{firmInfo.location}</div>
        <div>22:15, 12/10/2019</div>
        <div>{result.seats}</div>
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
