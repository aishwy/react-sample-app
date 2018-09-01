import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons : [
      {
        id: "asd1",
        name: "aishwarya",
        age: 21
      },
      {
        id: "asd1a",
        name: "navya",
        age: 18
      },
      {
        id: "asad1",
        name: "ojus",
        age: 17
      }
      
    ],
    showPersons: false
  }

    
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (i) => {
    //const persons = this.state.persons.slice();
    //persons.splice(i,1);
    //this.setState({persons:persons});

    //const persons = this.state.persons;
    //persons.splice(i,1);
    //this.setState(persons);

    const persons = [...this.state.persons];
    persons.splice(i,1);
    //console.log(persons);
    this.setState({persons:persons });
  }

  nameChangeHandler = (event,id) => {

    const i = this.state.persons.findIndex((p)=>{
      return p.id === id;
    });
    const person = {...this.state.persons[i]};
    person.name = event.target.value;
    const persons = this.state.persons;
    persons[i]=person;
    this.setState({persons: persons });
  }
  render() {
    const style = {
      fontSize: "20px",
      color: "#aaa",
      backgroundColor: "green",
      color: "white",
      margin: "10px",
      padding: "10px",
      cursor: "pointer",
      border: "3px solid lightblue",
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return (
              <Person 
              name={person.name} 
              age = {person.age} 
              click= {() => this.deletePersonHandler(index) } 
              changed={(event)=> this.nameChangeHandler(event,person.id) }

              key={person.id} />
            );
          })}
        </div>
      );
      style.backgroundColor="red";
      style[':hover']={
        backgroundColor: "salmon",
        color: "black"
      }
    }

    const classes = [];
    if(this.state.persons.length <=2) classes.push('red');
    if(this.state.persons.length <=1) classes.push('bold');
    if(this.state.persons.length <=0) classes.push('fsz30');
    return (
      <StyleRoot>
      <div className="App">
        <h1>I'm react app </h1> 
        <p className={classes.join(' ')}>This works!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m react app'));
  }
}


export default Radium(App);
