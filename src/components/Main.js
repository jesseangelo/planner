require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Clicker from 'components/Clicker';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
        <Clicker />
      </div>
    );
  }
}

AppComponent.propTypes = { initialCount: React.PropTypes.number };
AppComponent.defaultProps = { initialCount: 0 };

export default AppComponent;


