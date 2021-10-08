import { connect } from 'react-redux';
import { compose } from 'redux';
import CounterPlusButton from '../../components/CounterPlusButton';
import { increaseCounter } from '../../redux/actions/counterActions';

const Test1 = ({ dispatch, counter }) => {
  const onPlusClick = param => {
    dispatch(increaseCounter());
    console.log(param);
  };

  const getName = () => {
    return 'artir';
  };

  return (
    <div>
      {counter}
      <CounterPlusButton name={getName()} onActionClick={onPlusClick} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  counter: state.counter.counter,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Test1);
