import React, {Component} from 'react'
import './style.css'

export class Skill extends React.Component {
  render() {
    return (<div className="skill">
      <div className="staple" style={{
          height: this.props.height
        }}></div>
      <label className="subjectText">{this.props.subject}</label>
      <br/>
    </div>)
  }
}
