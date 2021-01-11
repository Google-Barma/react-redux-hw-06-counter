import { connect } from 'react-redux';
import StepInput from './StepInput';
import Value from './Value';
import Controls from './Controls';
import * as actions from '../redux/actions';

function Counter({ step, onChangeStep, value, onIncrement, onDecrement }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px',
      }}
    >
      <StepInput stepValue={step} onChangeStep={onChangeStep} />
      <Value value={value} />
      <Controls
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        step={step}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
  onChangeStep: value => dispatch(actions.step(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
