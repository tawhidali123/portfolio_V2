import React from 'react';

import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component {
  render() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <div className="img-container">
                <img 
                  src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png"
                  alt="user-icon"
                  className="avatar-img"
                 />
                 </div>
              
                 <div className="banner-text">
                   <h1>Tawhid Ali<br/> Front_End Web Developer</h1>

                   <hr />

                   <div className="experience">
                    <i class="fab fa-html5"><br/></i>
                    <i class="fab fa-css3-alt"><br/></i>
                    <i class="fab fa-js-square"><br/></i>
                    <i class="fab fa-react"><br/></i>
                    <i class="fab fa-node"><br/></i>
                   </div>

                   <div className="social-links">
                    <h6>Follow Me!</h6>
                     <a href="https://www.google.com/" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                     </a>

                     <a href="https://www.google.com/" target="_blank">
                        <i class="fab fa-github-square"></i>
                     </a>

                     <a href="https://www.google.com/" target="_blank">
                        <i class="fab fa-instagram"></i>
                     </a>
                   </div>
                 </div>
              </Cell>
            </Grid>
        </div>
    ); 
  }
}

export default LandingPage;