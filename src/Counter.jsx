import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fake, increment, decrement } from './actions/counter';
import ChildCounter from './ChildCounter';

const Counter = ({ counter, fake, increment, decrement }) => {
  console.log('COUNTER');
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={decrement}>DEC</button>
      <button onClick={increment}>INC</button>
      <button onClick={fake}>FAKE</button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        SHOW CHILD
      </button>
      {show && <ChildCounter />}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('MSTP COUNTER');
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, { fake, increment, decrement })(
  Counter
);
