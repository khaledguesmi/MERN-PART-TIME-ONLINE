import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
          };

        }
    
  render() {
    return (
      <div className="person-card">
        <h2>{this.props.firstName} {this.props.lastName}</h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;