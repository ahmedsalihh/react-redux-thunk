import React from 'react';

export class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log('ilk acilis');
  }

  componentDidUpdate() {
    console.log('guncellendi');
  }

  componentWillUnmount() {
    console.log('cikis');
  }

  onPlusClick = e => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        counter: {this.state.counter}
        <button type='button' onClick={this.onPlusClick}>
          +
        </button>
      </div>
    );
  }
}

export default NewComponent;
