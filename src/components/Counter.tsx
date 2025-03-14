// L'import de notre component
import { Component } from 'react'; 

// Définition de l'interface qui précise le typage du props 'count'
interface counterState {
    count : number
}

// Il s'agit d'un composant basé sur une classe auquel nous attribuons l'interface préalablement déclarée
class Counter extends Component <counterState> { 
    state = {
        count : 0
    } ;
    increment = () => {
        this.setState({ count : this.state.count + 1 }); 
    }; 

render() { 
    return( 
        <div> 
            <p style = {{marginTop: '40px', fontSize: '20px', fontWeight: 600}}>Count : {this.state.count}</p> 
            <button style = {{margin:'20px', padding: '10px', border: 'none', borderRadius:'10px', backgroundColor: '#3070a0', fontWeight: 400}} onClick = {this.increment}>Increment</button> 
        </div> 
    )}
} 

export default Counter