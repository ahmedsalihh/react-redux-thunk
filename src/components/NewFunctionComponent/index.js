import React, { useEffect, useState } from 'react';
import IncreaseButton from '../IncreaseButton';

const NewFunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('acildi');
  }, [counter]);

  //   const buttonClick = () => {
  //     setCounter(counter + 1);
  //   };

  function buttonClick(tmp) {
    console.log(tmp);
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>functional component </div>
      counter: {counter}
      <IncreaseButton onButtonClick={buttonClick} buttonText='increase' />
    </div>
  );
};

export default NewFunctionComponent;
