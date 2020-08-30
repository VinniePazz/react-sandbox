import React, { useState, useEffect, memo } from 'react';

const CustomDiv = memo(
  (props) => {
    console.log('test change quotes');
    useEffect(() => {
      console.log('CustomDiv useEffect');
    });
    return <div>{props.text}</div>;
  },
  function equal(prev, next) {
    return prev.object.text === next.object.text && prev.text === next.text;
  }
);

const Memo = () => {
  const [state, setState] = useState({ text: 'hey' });
  console.log('render');

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('cleanup');
    };
  });

  return (
    <>
      <CustomDiv object={state} text={state.text} />
      <div>{state.text}</div>
      <div>{state.text}</div>
      <button
        onClick={() => {
          setState({ text: 'bitch' });
        }}
      >
        Change text
      </button>
    </>
  );
};

export default Memo;
