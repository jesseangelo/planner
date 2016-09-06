class FoodPicker extends React.Component {
  render() {
    var selectFood = this.props.selectFood;
    var foodList = this.props.foods.map(function(food) {
      return (
        <li><a onClick={selectFood} value={food}>{food}</a></li>
      );
    });
    
    return (
      <div className='dropdown'>
        <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          {this.props.type}&nbsp;<span className="caret"></span>
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
          {foodList}
        </ul>
      </div>
    );
  }
}

export default FoodPicker;