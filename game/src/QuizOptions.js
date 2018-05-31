import React, { Component } from 'react'

export default class QuizOptions extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <div className="fields">
            <div className="field-block">{this.props.option}</div>
        </div>
      </div>
    )
  }
}
