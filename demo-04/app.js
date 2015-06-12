var ReactMixin = {
  getInitialState: function(){
    return {count: 0};
  },
  componentWillMount: function() {
    console.log('will mount');
  },
  incrementCount: function(){
    this.setState({count: this.state.count + 1})
  }
}

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Button txt="this is the button" />
        <Label txt="this is the table" />
      </div>
    );
  }
});

var Button = React.createClass({
  mixins: [ReactMixin],
  render: function() {
    return (
      <button className="Button" onClick={this.incrementCount}>{this.props.txt} -- {this.state.count}</button>
    );
  }
});

var Label = React.createClass({
  mixins: [ReactMixin],  
  componentDidMount: function() {
   setInterval(this.incrementCount, 1000) 
  },
  render: function() {
    return (
      <div className="Label">{this.props.txt} -- {this.state.count} </div>
    );
  }
});

React.render(<App />, document.body)