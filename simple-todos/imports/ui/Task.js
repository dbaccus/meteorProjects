import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
      return (
          <li>{this.props.task.text}</li>
      );
  }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
};
