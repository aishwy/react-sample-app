import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor()");
    this.state = {
      persons: [
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
  }

  componentWillMount() {
    console.log("[App.js] will()");
  }

  componentDidMount() {
    console.log("[App.js] did()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] should()");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] will()", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] did()");
  }



  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (i) => {
    //const persons = this.state.persons.slice();
    //persons.splice(i,1);
    //this.setState({persons:persons});

    //const persons = this.state.persons;
    //persons.splice(i,1);
    //this.setState(persons);

    const persons = [...this.state.persons];
    persons.splice(i, 1);
    //console.log(persons);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {

    const i = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[i] };
    person.name = event.target.value;
    const persons = this.state.persons;
    persons[i] = person;
    this.setState({ persons: persons });
  }
  render() {
    console.log("[App.js] render()");

    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }


    return (
      <div className={classes.App}>
      <button onClick={()=>{
        this.setState(
          {showPersons:true}
        )
      }}>Show Persons</button>
        <Cockpit
          title={this.props.title}
          length={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          red={this.state.showPersons}
        />
        {persons}
      </div>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m react app'));
  }
}


export default App;
