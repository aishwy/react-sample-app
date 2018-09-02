import React,{Component} from 'react';
import classes from './Cockpit.css';

class Cockpit extends Component {
    
    render() {
        let btnclass = classes.green;
        if(this.props.red) {
            btnclass = classes.red;
        }
        const assignedClasses = [];
        if(this.props.length <=2) assignedClasses.push(classes.red);
        if(this.props.length  <=1) assignedClasses.push(classes.bold);
        if(this.props.length  <=0) assignedClasses.push(classes.fsz30);
        return (
            <div>
            <h1>{this.props.title} </h1> 
            <p className={assignedClasses.join(' ')}>This works!</p>
            <button 
            className={btnclass} 
            onClick={this.props.clicked}>
                Toggle Persons
            </button>
            </div>
        );
    }
}
export default Cockpit;