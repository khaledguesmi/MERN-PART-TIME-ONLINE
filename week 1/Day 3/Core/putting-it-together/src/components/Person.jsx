
import React, { components } from 'react';

class Person extends components {
    constructor(props){
    // const [age, setAge] = useState(0);

        super(props);
        this.state = {
            age: this.props.age
          };
    }
  

        
    
  render() {
    const AgeCounter=()=>  {
        this.setState({age:this.props.age + 1});
    }

   
    

            
          
      
    return (
      <div className="person-card">
        <h2>{this.props.firstName} {this.props.lastName}</h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
       
      <button onClick={AgeCounter}>Augmenter l'âge</button>
      </div>
  );
      

    }}

export default Person;