class Meal extends React.Component {
  getInitialState: function() {
    return { 
      selectedProteins: [],
      selectedCarbs: [] 
    }
  },
  selectCarb(e){    
    this.setState({
      selectedCarbs: [e.target.value]
    });   
  },
  selectProtein(e){
    this.setState({
      selectedProteins: [e.target.value]
    });   
  },
  render() {
    return (
      <div>
        <div className="col-xs-12">
          <h4>{this.props.mealName}</h4>
        </div>
        <Input carbList={this.props.carbList} 
          selectCarb={this.selectCarb} 
          proteinList={this.props.proteinList} 
          selectProtein={this.selectProtein}
        />
        <Output selectedCarbs={this.state.selectedCarbs} 
          selectedProteins={this.state.selectedProteins}
        />
      </div>
    );
  }
}

export default Meal;