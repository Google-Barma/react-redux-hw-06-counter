import { useState, useEffect } from 'react';

export default function StepInput({ stepValue, onChangeStep }) {
  const [step, setStep] = useState(5);

  useEffect(() => {
    onChangeStep(step);
  }, [onChangeStep, step]);

  return (
    <input
      type="text"
      value={step}
      onChange={e => {
        setStep(Number(e.target.value));
      }}
      style={{
        display: 'block',
        marginBottom: '15px',
        width: '30px',
        textAlign: 'center',
      }}
    />
  );
}
