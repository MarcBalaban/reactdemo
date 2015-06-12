var Button = React.createClass({
  getInitialState: function() {
    return {increasing: false} 
  },
  update: function(){
    this.setProps({
      val: this.props.val + 1
    });
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  },
  componentDidUpdate: function(prevProps, prevState, nextState) {
    console.log('prevProps', prevProps, 'prevState', prevState);
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  },
  render: function() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update} className="Button">{this.props.val}</button>
    );
  }
});

React.render(<Button val={0} />, document.body);

