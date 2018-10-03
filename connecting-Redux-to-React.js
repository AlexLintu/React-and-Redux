// Redux

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Functions mapStateToProps() & mapDispatchToProps()
  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };
  
  // React
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  // Connecting Redux to React
  const connect = ReactRedux.connect;
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);