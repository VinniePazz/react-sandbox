import React, { useState } from 'react';
import Counter from './Counter';
import Posts from './components/Posts/Posts';
import ErrorBoundary from './ErrorBoundary';
import Children from './Children';
import Text from './Text';
import FetchWithSpinner from './FetchWithSpinner';
import Class from './Class';

export const TextContext = React.createContext();
TextContext.displayName = 'TEXT';

function App() {
  console.log(React.isValidElement(<Class />));
  return (
    <>
      {/* <Posts /> */}
      <Class prop={1} />
    </>
  );
}

export default App;
