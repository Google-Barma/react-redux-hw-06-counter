export default function Controls({ step, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={() => onDecrement(step)}>Уменьшить на {step}</button>
      <button onClick={() => onIncrement(step)}>Увеличить на {step}</button>
    </div>
  );
}
