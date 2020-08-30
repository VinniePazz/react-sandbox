import React, { useLayoutEffect, useRef } from 'react';

const Child = () => {
  return <div></div>;
};

const Ref = () => {
  const element = useRef(null);
  useLayoutEffect(() => {
    console.log(element.current.clientHeight);
    element.current.style.height = '1000px';
    console.log(element.current.clientHeight);
  });
  return (
    <>
      <Child />
      <div ref={element} style={{ height: '500px', background: 'brown' }}></div>
    </>
  );
};

export default Ref;
