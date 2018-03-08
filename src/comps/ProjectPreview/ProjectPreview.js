import React from 'react'
import './style.css'

export class ProjectPreview extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(' + this.props.background + ')',
          height: this.props.height,
          width: this.props.width,
        }}
        className="preview"
      >
        <div className="darken">
          <div className="preview-content">
            <h2 className="title-preview">{this.props.projectName}</h2>
            <p className="paragraph-preview">{this.props.paragraph}</p>
          </div>
        </div>
      </div>
    )
  }
}
