import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault(e);

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    // Call Action
    this.props.createPost(post);
  }

  render() {
    return (
      <div className="Form-body">
        <h1>Add a Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <br />
            <button type="submit">Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
