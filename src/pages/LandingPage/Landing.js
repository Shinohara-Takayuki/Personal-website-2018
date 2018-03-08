import React from 'react'

import {Button} from '../../comps/Button/Button'
import {ProfileImg} from '../../comps/ProfileImg/ProfileImg'
import {ProjectPreview} from '../../comps/ProjectPreview/ProjectPreview'
import {Nav} from '../../comps/Nav/Nav'
import {Skill} from '../../comps/Skill/Skill'
import ScrollAnimation from 'react-animate-on-scroll'

import Background1 from '../../static/images/loovia.png'
import Background2 from '../../static/images/webappui.png'
import Background3 from '../../static/images/league.png'

import './style.css'

export default class Landing extends React.Component {
  render() {
    return (<div className="wrapper">
      <Nav/>
      <div className="header">
        <div className="content">
          <h1 className="title">
            JavaScript developer and Web designer from Sweden with big goals.
          </h1>
          <div className="button-wrapper">
            <Button value="View work" className="button-default"/>
            <Button value="Connect with me" className="button-blue"/>
          </div>
          <p className="paragraph">
            "A developer with great design skills is a luxury employee."
          </p>
        </div>
      </div>

      <div className="projects">
        <div className="section-title">Personal Projects</div>
        <p className="section-paragraph">
          These projects are a mix of freelance work and personal products and trainig projects.
        </p>
        <div className="projectsContent">
          {/* Splitting 1110px on 3 */}
          {/* Splitting 1140px on 2 */}

          <ProjectPreview projectName="Web App Styleguide" background={Background2} height="300px" width="770px" paragraph="The Web App UI-Kit is a UI kit I worked on for several weeks to complete. It is a modern styleguide containing 3 large artboards and 90+ symbols."/>

          <ProjectPreview projectName="Loovia" background={Background1} height="300px" width="370px" paragraph="I worked with the up and coming app Loovia, with the designing the app from start to finish. Containing about 90 screens."/>

          <ProjectPreview projectName="League of Legends stats finder" background={Background3} height="300px" width="100%" paragraph="Every student is supposed to come up with their own high school project in Sweden. It can be from something you've learned throughout the courses, or something completely different. This is what me and my classmate did."/>
        </div>
      </div>

      <div className="about">
        <div className="section-title-about">About Albin</div>
        <p className="section-paragraph-about">
          Get to know Albin a little better by reading a paragraph about his ambitions and interests.
        </p>
        <p className="section-paragraph-big">
          Albin has a great passion for making things digitally. A specially on the web. He started making basic websites in HTML, CSS and JQuery a couple of years ago and completely fell in love with it. Web and app design is also a great interest of his. Combining school, working on a start-up and making side projects is quite a though challange but is what has to be done to get where he wants do be. Albin wants to keep going with design and front-end web developemnt but transition into acheiving full-stack skills. He always gives a 100% to complete his missions, and get closer to his goals. Many goals are set, but on of the bigger ones are working on one of the bigger global companies such as Google or Facebook.
        </p>
      </div>

      <div className="experience">
        <div className="section-title-about">Skills and experience</div>
        <p className="section-paragraph-about">
          Get to know Albin a little better by reading a paragraph about his ambitions and interests.
        </p>
        <div className="chart">
          <Skill subject="HTML5" height="300px"/>
          <Skill subject="CSS3" height="300px"/>
          <Skill subject="UI" height="300px"/>
          <Skill subject="UX" height="200px"/>
          <Skill subject="JavaScript" height="200px"/>
          <Skill subject="ReactJS" height="175px"/>
          <Skill subject="PHP" height="50px"/>
          <Skill subject="Electron" height="20px"/>
          <Skill subject="RNative" height="20px"/>
          <Skill subject="Electron" height="20px"/>
        </div>
      </div>

      <div className="contact">
        <div className="section-title-about">Get in contact</div>
        <p className="section-paragraph-about">
          Send a email to Albin describing your awesome ideas or job options, or maybe a hackathon invite.
        </p>
        <form>
          <input type="text" placeholder="Name" required="required"/>
          <input type="email" placeholder="Email" required="required"/>
          <textarea name="" placeholder="Description"/>
          <button className="formButton">Send mail</button>
        </form>
      </div>

      <div className="pingpong">
        <div className="p1">
          <div className="p1top"></div>
          <div className="p1bottom"></div>
        </div>
        <div className="ball"></div>
        <div className="p2">
          <div className="p2top"></div>
          <div className="p2bottom"></div>
        </div>
      </div>

      {/* <ProfileImg /> */}

      <footer>
        <div className="footLeft">
          <ul className="footerList">
            <li className="footerListItem">Home</li>
            <li className="footerListItem">Projects</li>
            <li className="footerListItem">About</li>
            <li className="footerListItem">Contact</li>
          </ul>
        </div>
        <div className="footCenter">
          <ul className="footerList">
            <li className="footerListItem">Github</li>
            <li className="footerListItem">Codepen</li>
            <li className="footerListItem">Dribbble</li>
            <li className="footerListItem">Behance</li>
          </ul>
        </div>
        <div className="footRight">
          <ul className="footerList">
            <li className="footerListItem">Instagram</li>
            <li className="footerListItem">LinkedIn</li>
            <li className="footerListItem">Twitter</li>
            <li className="footerListItem">Facebook</li>
          </ul>
        </div>
      </footer>

    </div>)
  }
}
