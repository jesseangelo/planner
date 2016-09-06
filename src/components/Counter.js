class Counter extends React.Component {
  getInitialState: function() {
    return {
      caloriesConsumed: 0
    }
  },
  render() {
    var setCalorieIntake = this.props.setCalorieIntake;
    var mode = this.props.mode;
    
    return (
      <div className="counter">
        Desired total: <input placeholder={this.props.caloriesMax} onChange={setCalorieIntake}/>&nbsp;
        Total Consumed: {this.state.caloriesConsumed}
        <br/>
         Your calories: {this.props.caloriesMax}
        <br/>
        MODE: {this.props.mode} <br/>
        <label><input type="radio" name="mode" checked={this.props.mode == "b"} /> Bulk</label>
        &nbsp;
        <label><input type="radio" name="mode" checked={this.props.mode == "c"}/> Cut</label>
        &nbsp;
        <label><input type="radio" name="mode" checked={this.props.mode == "m"}/> Maintain</label>
        <br />
        Caloric Breakdown:
        <br/>
        Protiens: 
        Carbs: 
        Fats: 
      </div>
    );
  }
}

export default Counter;
