import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <Card shadow={4} style={{minWidth: '450', margin: 'auto'}} className="card1">
            <CardTitle style={{color: 'black', height: '106px', background: 
            'url(https://plainjs.com/static/img/logo_640.png) center/cover'}}></CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={4} style={{minWidth: '450', margin: 'auto'}} className="card2">
            <CardTitle style={{color: 'black', height: '106px', background: 
            'url(https://plainjs.com/static/img/logo_640.png) center/cover'}}></CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          <Card shadow={4} style={{minWidth: '450', margin: 'auto'}} className="card1">
            <CardTitle style={{color: 'black', height: '106px', background: 
            'url(https://cdn-images-1.medium.com/max/1600/1*glkosslpqhOOrGyEqjlYdw.png) center/cover'}}>React Native</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={4} style={{minWidth: '450', margin: 'auto'}} className="card2">
            <CardTitle style={{color: 'black', height: '106px', background: 
            'url(https://cdn-images-1.medium.com/max/1600/1*glkosslpqhOOrGyEqjlYdw.png) center/cover'}}> React Native</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
          <Card shadow={4} style={{minWidth: '450', margin: 'auto'}} className="card1">
            <CardTitle style={{color: 'black', height: '106px', background: 
            'url(https://facebook.github.io/react/logo-og.png) center/cover'}}>React</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={4} style={{minWidth: '450', margin: 'auto'}} className="card2">
            <CardTitle style={{color: 'black', height: '106px', background: 
            'url(https://facebook.github.io/react/logo-og.png) center/cover'}}> React</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  };


  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} 
        onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Vanilla Javascript</Tab>
          <Tab>React-Native</Tab>
          <Tab>React</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div> 
    ); 
  }
}

export default Projects;