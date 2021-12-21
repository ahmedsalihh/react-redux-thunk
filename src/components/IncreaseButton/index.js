const IncreaseButton = ({ onButtonClick, buttonText }) => {
  const tmp = 'salih';

  const onIncreaseClick = () => {
    onButtonClick(tmp);
  };

  return (
    <button type='button' onClick={onIncreaseClick}>
      {buttonText}
    </button>
  );
};

export default IncreaseButton;
