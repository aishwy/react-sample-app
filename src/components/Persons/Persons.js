import React,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] constructor()");
    }
    componentWillMount() {
        console.log("[Persons.js] will()");
      }
    
      componentDidMount() {
        console.log("[Persons.js] did()");
      }
    
    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE] recieve()");
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log("[UPDATE] should()");
        return true;
    }
    componentWillUpdate(nextProps,nextState) {
        console.log("[UPDATE] will()",nextProps,nextState);
    }
    componentDidUpdate() {
        console.log("[UPDATE] did()");
    }
    render() {
        console.log("[Persons.js] render()");
        return this.props.persons.map((person,index) => <Person 
        name={person.name} 
        age = {person.age} 
        click= {() => this.props.clicked(index)} 
        changed={(event)=> this.props.changed(event,person.id) }

        key={person.id} />);
    }
}

export default Persons;