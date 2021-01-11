import { useState } from 'react';

export default function StepInput() {
  const [step, setStep] = useState(5);

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
