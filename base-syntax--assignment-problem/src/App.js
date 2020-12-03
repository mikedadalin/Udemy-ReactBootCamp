import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  
  state = {
    users: [
      {
        username: "yungever", 
        paragraphs:[
          '“The targeted, measured directives in the executive order are based on links between certain types of businesses and services and the recent rise in positive cases throughout the state,” according to a statement.',

          '“We want this to be as limited in duration as possible. However, we can only slow the spread if everyone in Texas does their part,” Abbott said in a statement. “I know that our collective action can lead to a reduction in the spread of COVID-19 because we have done it before, and we will do it again.”'
        ]
      }
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState({
      users:[
        {
          username: event.target.value, 
          paragraphs:[
            '“The targeted, measured directives in the executive order are based on links between certain types of businesses and services and the recent rise in positive cases throughout the state,” according to a statement.',

            '“We want this to be as limited in duration as possible. However, we can only slow the spread if everyone in Texas does their part,” Abbott said in a statement. “I know that our collective action can lead to a reduction in the spread of COVID-19 because we have done it before, and we will do it again.”'
          ]
        }
      ]
    })
  }

  render() {

    const questionStyle = {
      border: "1px solid blue",
      marginTop: "5rem"
    }

    return (
      <div className="App">
        
        <UserInput 
          username={this.state.users[0].username}
          changed={this.usernameChangeHandler}
        />
        <UserOutput 
          username={this.state.users[0].username}
          paragraphs={this.state.users[0].paragraphs}
        />  
        <UserOutput 
          username={this.state.users[0].username}
          paragraphs={this.state.users[0].paragraphs}
        />        





        <ol style={questionStyle}>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
