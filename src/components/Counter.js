import { connect } from 'react-redux';
import StepInput from './StepInput';
import Value from './Value';
import Controls from './Controls';
import * as actions from '../redux/actions';

function Counter({ step, value, onIncrement, onDecrement }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px',
      }}
    >
      <StepInput />
      <Value value={value} />
      <Controls
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        step={step}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
