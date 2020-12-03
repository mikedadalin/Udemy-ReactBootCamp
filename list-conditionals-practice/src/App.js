import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  
  state = {
    text_length: 0,
    string: ""
  }


  textlengthHandler = (event) => {
    const len = event.target.value.length
    const text = event.target.value
    this.setState({
      text_length: len,
      string: text
    })
  }

  deleteletterHandler = (letterIndex) => {
    const strArr = this.state.string.split("")    
    strArr.splice(letterIndex,1)
    const new_text = strArr.join("")
    const len = new_text.length
    this.setState({
      text_length: len,
      string: new_text
    })
  }

  render() {
    
    let string = null

    if(this.state.string) {
      string = this.state.string.split("").map((char,index) => {
        return (
          <Char 
            key={index} 
            letter={char} 
            click={() => this.deleteletterHandler(index)}
          />
        )
      }) 
    }
    

    return (
      <div className="App">
        
        <input 
          type="text" 
          onChange={this.textlengthHandler} 
          value={this.state.string}
        />
        <p>Text Length: {this.state.text_length}</p>

        <Validation
          length={this.state.text_length}
        />

        {string}


        <hr />
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
