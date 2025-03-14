// On déclare une interface qui définit les props de notre composant

interface GreetingProps {
    name: string // Le typage du props
}

// Nous définissons notre composant en précisant qu'il s'agit d'un composant React Fonctionnel et on lui affecte notre interface pour qu'on puisse lui attribuer son props
const Greeting: React.FC<GreetingProps> = ({ name }) => { 

    return(
        <div style={{margin:'80px', fontFamily:'cursive', fontSize:'20px', fontWeight: 500, color:'#3F51B5'}}> Hello, {name} ! </div>
    )

};

//On exporte le composant pour qu'on puisse l'appeler dans le App (endpoint)
export default Greeting;