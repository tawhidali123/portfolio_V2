import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component {
  render() {
    return (
        <div className="contact">
            <Grid className="contact-grid">
              <Cell col={6} className="name">
                <h2>Tawhid Ali</h2>
                <img 
                  src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png"
                  alt=""
                  style={{height: '250px'}}
                />
                <p> 
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search 
                for 'lorem ipsum' will uncover many web sites still in their infancy. 
                </p>
              </Cell>
              <Cell col={6} className="info">
                <h2>Contact Me</h2>
                <hr/>

                <div className="info-list">
                  <List>
                    <ListItem>
                      <ListItemContent icon="phone">(347)-307-4531</ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent icon="email">tawhidali126@gmail.com</ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent icon="person">Queens, New York</ListItemContent>
                    </ListItem>
                  </List>
                </div>
              
              </Cell>
            </Grid>
        </div>
    ); 
  }
}

export default Contact;