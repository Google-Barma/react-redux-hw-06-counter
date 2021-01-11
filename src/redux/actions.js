export const increment = increment => ({
  type: 'counter/Increment',
  payload: { increment },
});

export const decrement = decrement => ({
  type: 'counter/Decrement',
  payload: { decrement },
});

export const step = stepValue => ({
  type: 'counter/Step',
  payload: { stepValue },
});
