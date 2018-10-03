class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState({
      messages: this.state.messages.concat(this.state.input),
      input: ''
    });
  }
  
    render() {
      const items = this.state.messages.map(i => <li>(i)</li>);
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.submitMessage}>Add Message</button>
          <ul>{items}</ul>
        </div>
      );
    }
  };
