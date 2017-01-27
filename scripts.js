// make markdown file the input field and make the state all of the text
// changing the input sould change the state to the input's value

/* as I change the markdown, (keyup) change the
text to the right to display the new value */

/* all rendered markdown should be in a single state.
when the input is changed, that should change the
html in the file, which in turn should trigger a state rerender
which will change the content shown
*/

// markdown class

var MarkdownInput = React.createClass({
  // when field is changed (keyup) have a state that equals the text in the textarea
  render: function() {
    return (
      <div className="col-md-6">
        <textarea className="form-control" rows="30" onChange={this.props.handleChange}>{this.props.value}</textarea>
      </div>
    );
  }
});

var HTMLOutput = React.createClass({
  /*
  when the input is changed, that should change the
  html in the file, which in turn should trigger a state rerender
  which will change the content shown
  */
  render: function() {
    return (
      <div className="col-md-6">
        <p>{this.props.value}</p>
      </div>
    );
  }
});


var Main = React.createClass({
  getInitialState: function() {
    return {value: null};
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    return (
      <div className="row">
        <MarkdownInput value={this.state.value} handleChange={this.handleChange} />
        <HTMLOutput value={this.state.value} handleChange={this.handleChange} />
      </div>
    );
  }
});

ReactDOM.render(
<Main />,
document.getElementById("root")
);
