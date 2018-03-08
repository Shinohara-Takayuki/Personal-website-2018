import React from 'react'
import './style.css'

export class Nav extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav">
          <ul className="nav-list">
            <a className="list-link" href="#">
              <li className="list-item">Github</li>
            </a>
            <a className="list-link" href="#">
              <li className="list-item">Dribbble</li>
            </a>
            <a className="list-link" href="#">
              <li className="list-item">Codepen</li>
            </a>
          </ul>
        </nav>
      </div>
    )
  }
}
