import React from 'react';

class MyClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  onButtonCLick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        my class component {this.state.counter}
        <button type='button' onClick={this.onButtonCLick}>
          +
        </button>
      </div>
    );
  }
}

export default MyClassComponent;
