import React from 'react';
import Meal from 'components/Meal'
//import FoodPicker from 'components/foodpicker';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carbs: props.carbs,
      protein: props.protein
    };
    //this.tick = this.tick.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Meal mealName="El Desayuno" carbList={this.state.carbs} proteinList={this.state.protein} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="El Lunch" carbList={this.state.carbs} proteinList={this.state.protein} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Cena" carbList={this.state.carbs} proteinList={this.state.protein} />
        </div>
        <br /><br />
        <div className="row">
          <Meal mealName="La Merienda" carbList={this.state.carbs} proteinList={this.state.protein} />
        </div>
      </div>
    );
  }
}

AppRoot.propTypes = {
  carbs: React.PropTypes.array,
  protein: React.PropTypes.array
};
AppRoot.defaultProps = {
  carbs: ['pasta', 'oatmeal', 'Lucky Charms'],
  protein: ['pork', 'chicken', 'bison']
};

export default AppRoot;
