/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdsa', name: 'Ken', age: 42 },
      { id: 'xzvzcv', name: 'Manu', age: 29 },
      { id: 'zxvzx', name: 'Steph', age: 26 }
    ],
    showPersons: false
  }

  // handleSwitchName = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 30 },
  //       { name: 'Sebastian', age: 15 },
  //       { name: 'Kajsa', age: 25 }
  //     ],
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  handleNameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
      this.setState({
        /**
        * Set showPerson to what doesShow is not, 
        * if doesShow is false-showPersons is set to true
        */
       showPersons: !doesShow 
      });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.handleNameChanged(event, person.id)}
          />;
        })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
