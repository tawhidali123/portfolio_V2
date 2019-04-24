import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './Skills'

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center', position: 'absolute'}}>
                <img
                  src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                  alt="avatar"
                  style={{height: '200px'}}
                />
              </div>

              <h2 style={{paddingTop: '2em'}}>Tawhid Ali</h2>
              <h4>Programmer</h4>
              <hr style={{borderTop: '5px solid black', width: '50%'}}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <hr style={{borderTop: '5px solid black', width: '50%'}}/>
              <h5>Address</h5>
              <p>1 Hacker way Menlo Park, 94025</p>
              <h5>Email</h5>
              <p>tawhidali126@gmail.com</p>
              <h5>Web</h5>
              <p>myWebsite.com</p>
              <h5>Phone</h5>
              <p>(123)-456-7891</p>
              <hr style={{borderTop: '5px solid black', width: '50%'}}/>
            </Cell>

            <Cell col={8} className="resumeRightSide">
              <h2>Education</h2>
              <Education 
                startYear={2008}
                endYear={2012}
                schoolName="Thomas A. Edison"
                schoolInfo="Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              />

              <Education 
                startYear={2012}
                endYear={2015}
                schoolName="York College"
                schoolInfo="Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <hr style={{borderTop: '5px solid black'}}/>

              <h2>Experience</h2>
              <Experience 
                startYear={2013}
                endYear={2015}
                jobName="First job"
                jobInfo="Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              />

              <Experience 
                startYear={2016}
                endYear={2019}
                jobName="Second job"
                jobInfo="Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <hr style={{borderTop: '5px solid black'}}/>

              <h2>Skills</h2>
              <Skills 
                skill="Html/CSS"
                progress={95}
                buffer={5}
              />

              <Skills 
                skill="JavaScript"
                progress={85}
                buffer={15}
              />

              <Skills 
                skill="PHP"
                progress={80}
                buffer={20}
              />

              <Skills 
                skill="React.js"
                progress={70}
                buffer={30}
              />

              <Skills 
                skill="React-Native"
                progress={45}
                buffer={55}
              />

              <Skills 
                skill="Node.js"
                progress={35}
                buffer={65}
              />
            </Cell>
        </Grid>
      </div>  
    ); 
  }
}

export default Resume;