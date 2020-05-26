import React from 'react';
import { connect } from 'react-redux';

const ChildCounter = () => {
  console.log('CHILD COUNTER');
  return <div>CHILD</div>;
};

const mapStateToProps = (state, props) => {
  console.log('MSTP CHILD COUNTER');
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(ChildCounter);
