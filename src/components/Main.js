require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import AppRoot from 'components/approot'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      	<AppRoot />
      </div>
    );
  }
}

AppComponent.propTypes = { };
AppComponent.defaultProps = { };

export default AppComponent;
