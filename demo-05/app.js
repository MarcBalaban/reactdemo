var App = React.createClass({
  getInitialState:function(){
    return {
      red: 0,
    }
  },
  update: function(){
    this.setState({
      red:this.refs.red.refs.inp.getDOMNode().value,
    })
  },
  render:function(){
    return (
      <div>
        <NumInput 
        ref="red"
        min={0} 
        max={255} 
        step={1}
        val={this.state.red} 
        label="Red"
        update={this.update} />
      </div>
      );
  }
});

var NumInput = React.createClass({
  PropTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
  },
  getDefaultProps: function() {
    return {
      min: 0,
      max: 0,
      step: 1,
      val: 1,
      label: '',
      type: 'range'


    };
  },
  render:function(){
    var label = this.props.label !== '' ?
      <label>{this.props.label} {this.props.val} </label> : '';
    return (
      <div>
      <input ref="inp" 
        type= {this.props.type} 
        min= {this.props.min}
        max= {this.props.max}
        defaultValue={this.props.val}
        step={this.props.step}
        onChange={this.props.update} />
        {label}
      </div>
    )
  },

});

React.render(<App />, document.body)

