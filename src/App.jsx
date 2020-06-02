import React, { useState } from 'react';
import Counter from './Counter';
import Posts from './components/Posts/Posts';
import ErrorBoundary from './ErrorBoundary';
import Children from './Children';
import Text from './Text';
import FetchWithSpinner from './FetchWithSpinner';

export const TextContext = React.createContext();
TextContext.displayName = 'TEXT';

function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('something');
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setText('asdasd');
        }}
      >
        Change context value
      </button>
      <TextContext.Provider value={text}>
        <Text />
      </TextContext.Provider>
      <FetchWithSpinner />
    </>
  );
}
// If we pass to Provider non primitive value, this will rerender all Consumers based on this Provider every time App state changes
// because every time when App rerender, Provider will be rerendered with new object type value with brand new reference despite of fact that text changes or not

export default App;
