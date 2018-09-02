import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js] constructor()",props);
    }
    componentWillMount() {
        console.log("[Person.js] will()");
      }
      componentWillUnmount() {
        console.log("[Person.js] will_unmount()");
      }
    
      componentDidMount() {
        console.log("[Person.js] did()");
      }
    render() {
        console.log("[Person.js] render()");
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I am {this.props.name } and I am {this.props.age} years old.</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;