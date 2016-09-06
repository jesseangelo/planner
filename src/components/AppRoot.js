import React from 'react';
//import Input from 'components/input'

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: props.test,
      carbs: props.carbs
    };
    //this.tick = this.tick.bind(this);
  }
  setCalorieIntake(e) {
    this.setState({
      caloriesMax: e.target.value
    });
  }
  render() {
    return (
      <div className='container'>
        Test Count { this.state.carbs[2] }
      </div>
    );
  }
}

AppRoot.propTypes = {
  carbs: React.PropTypes.array,
  protein: React.PropTypes.array,
  test: React.PropTypes.number
};
AppRoot.defaultProps = {
  carbs: ['pasta', 'oatmeal', 'Lucky Charms'],
  protein: ['chicken', 'beef'],
  test: 20
};

export default AppRoot;
