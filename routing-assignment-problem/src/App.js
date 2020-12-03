import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import Course from './containers/Course/Course';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{ textAlign: 'left' }}>
            <li style={{ textDecoration: 'line-through' }}>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li style={{ textDecoration: 'line-through' }}>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li style={{ textDecoration: 'line-through' }}>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li style={{ textDecoration: 'line-through' }}>Pass the course ID to the "Course" page and output it there</li>
            <li style={{ textDecoration: 'line-through' }}>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li style={{ textDecoration: 'line-through' }}>Load the "Course" component as a nested component of "Courses"</li>
            <li style={{ textDecoration: 'line-through' }}>Add a 404 error page and render it for any unknown routes</li>
            <li style={{ textDecoration: 'line-through' }}>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>

          <hr></hr>

          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/courses"  activeClassName="active" >Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/users" exact>Users</NavLink>
                </li>
              </ul>
            </nav>

          </header>

          <Switch>
            <Route path="/" exact />
            {/* <Route path="/courses/:courseid" component={Course} /> */}
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>404 Not Found</h1>}/>
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
