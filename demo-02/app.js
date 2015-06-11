var Button = React.createClass({
  getInitialState: function() {
    return {
      val: 0
    };
  },
  componentWillMount: function() {
    this.setState({m:2});    
  },
  componentDidMount() {
    this.inc = setInterval(this.update,500);
  },
  componentWillUnmount() {
    clearInterval(this.inc);
  },
  update: function(){
    this.setState({
      val: this.state.val + 1
    });
  },
  render: function() {
    console.log('rendering');
    return (
      <button onClick={this.update} className="Button">{this.state.val * this.state.m}</button>
    );
  }
});

var App = React.createClass({

  mount: function(){
    React.render(<Button />, document.getElementById('app'));
  },
  unmount: function() {
    React.unmountComponentAtNode(document.getElementById('app'));
  },

  render: function() {
    return (
      <div>
        <button onClick={this.mount}>mount</button>
        <button onClick={this.unmount}>unmount</button>
        <div id="app" />
      </div>
    );
  }
});

React.render(<App />, document.body);

