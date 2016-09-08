import React from 'react';
import Meal from 'components/Meal'
//import FoodPicker from 'components/foodpicker';

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
      <div className="container">
        <div className="row">
          <Meal mealName="El Desayuno" carbList={this.state.carbs}
          proteinList={this.state.protein} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="El Lunch" carbList={this.state.carbs}
          proteinList={this.state.protein} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Cena" carbList={this.state.carbs}
          proteinList={this.state.protein} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Merienda" carbList={this.state.carbs}
          proteinList={this.state.protein} />
        </div>
      </div>
    );
  }
}

AppRoot.propTypes = {
  carbs: React.PropTypes.array,
  test: React.PropTypes.number
};
AppRoot.defaultProps = {
  carbs: ['pasta', 'oatmeal', 'Lucky Charms'],
  protein: ['pork', 'chicken', 'bison']
};

export default AppRoot;
