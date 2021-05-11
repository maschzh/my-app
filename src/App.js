import logo from './logo.svg';
import './App.css';
import Table from './Table'
import { Component } from 'react';
import Form from './Form'


class App extends Component {
  state = {
    characters:[
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }

  removeCharacter = (index) =>{
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i)=>{
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render(){
    return ( 
      <div className = "container" >   
        <h1>React App</h1>
        <div>Add a character with a name and a job to the table</div>     
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/> 
        <h1>Add New</h1>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;