/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import SeatKind from 'components/SeatKind';
import GeneralInfo from 'components/GeneralInfo';
import screen from './image/bg-screen.png';
import './style.scss';
import {textSort} from '../../utils/utils';
import {PinchView} from 'react-pinch-zoom-pan'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    const { fetchFirm } = this.props;
    fetchFirm()
  }

  choosingSeat(seatInfo) {
    const firm_info = this.props.firm_info;
    const { updateFirm, choosingSeat} = this.props
    if (choosingSeat.length < 6 || seatInfo.isBooking) {
      const row = seatInfo['row'];
      firm_info.seatMap[row] = firm_info.seatMap[row].map(seat => {
        if (seatInfo.name == seat.name) {
          seat.isBooking = !(!!seat.isBooking)
        };
        return seat;
      })
      updateFirm(firm_info, seatInfo)
    } else {
      alert("Bạn chỉ được chọn tối đa 6 ghế");
    }
  }

  prepareSeatMap(seatKind, seatMap) {
    return Object.keys(seatMap).sort(textSort).map(row => seatMap[row].map(seat => {
      const { background, color, price } = seatKind.find(seat2 => seat2.id == seat.seatKindId)
      if (background && color && price) {
        seat = { ...seat, background, color, row, price }
      }
      return seat
    }))
  }

  render() {
    let { seatKind = [], seatMap = [] } = this.props.firm_info
    const {firm_info, choosingSeat} = this.props
    seatMap = this.prepareSeatMap(seatKind, seatMap)
    return (
      <article>
        <Helmet>
          <title>Book page</title>
          <meta name="description" content="Book page" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <img src={screen} alt="screen" className="screen" />
          </section>
          <section>
            <PinchView backgroundColor='#FAFAFA' initalScale={2} maxScale={4} containerRatio={55}>
              <div className="seats-map-container">
                  <ReposList className="seats-map" seatMap={seatMap} choosingSeat={(seat) => this.choosingSeat(seat)} />
              </div>
            </PinchView>
            <p className="map-hint">*Giữ phím ALT và kéo thả chuột để phóng to / thu nhỏ sơ đồ</p>
            <div>
              <SeatKind seatKind={seatKind} />
            </div>
          </section>
              <GeneralInfo choosingSeat={choosingSeat} firmInfo={firm_info}/>
          <section>

          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};
