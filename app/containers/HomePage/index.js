import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getFirmInfo, updateFirmInfo} from './actions';
import {
  makeSelectFirm,
  choosingSeat,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  fetchFirm: () => {
    dispatch(getFirmInfo());
  },
  updateFirm: (firm_info, choosing_seat) => {
    dispatch(updateFirmInfo(firm_info, choosing_seat));
  },
});

const mapStateToProps = createStructuredSelector({
    firm_info: makeSelectFirm(),
    choosingSeat: choosingSeat()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
