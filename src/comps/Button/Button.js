import React from 'react'

export class Button extends React.Component {
  render() {
    return (
      <div>
        <a href="" className={this.props.className}>
          {this.props.value}
        </a>
      </div>
    )
  }
}
