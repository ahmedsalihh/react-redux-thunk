const CounterPlusButton = ({ name, onActionClick }) => {
  const onPlusClick = () => {
    onActionClick({ name: 'asd', age: 12 });
  };

  return (
    <button type='button' onClick={onPlusClick}>
      {name}
    </button>
  );
};

export default CounterPlusButton;
