import React from 'react'
import { Navbar, Nav  } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import { LinkContainer} from 'react-router-bootstrap'
import Time from 'components/Time'
import Weather from 'components/Weather'
import './App.scss'

const Home = () => {
  return <React.Fragment>
    <h1>Home</h1>
    <p>This is the home page. Try making another choice from the menu on top!</p>
  </React.Fragment>
}


const app = () => {
  return <React.Fragment>
    <Navbar fixed="top" bg="dark" variant="dark">
      <LinkContainer to="/" exact>
        <Navbar.Brand>
       04-react-router
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <LinkContainer to="/" exact>
            <Nav.Link  active={false}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/time">
            <Nav.Link active={false}>Time</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/weather">
            <Nav.Link active={false}>Weather</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/time' component={Time} />
      <Route path='/weather' component={Weather} />
    </Switch>
  </React.Fragment>
}

export default app