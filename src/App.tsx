// Imports 
import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

// Notre composant principal qui est un composant fonctionnel
const App: React.FC = () => {
  return (
    <div className="App">
{/* L'appel de nos composants pour qu'ils s'affichent sur notre page */}

        <h1>React Apps With TypeScript</h1>
        <Greeting name = {'Adam'} />
        <Counter count = {0} />
        
    </div>
  );
}

export default App;
