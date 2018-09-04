import React from 'react' ;
/*Affichage*/ 
import {render} from 'react-dom';
/*CSS*/
import './index.css';

class Connexion extends React.Component {

    render(){
        return(
            <div className="connexionBox">
            <form className="connexion">
            <input type="text" placeholder="Votre pseudo" required/>
            <button type="submit">Accéder au chat</button>
            </form>
            </div>
        )
    }
}

    /* fonction qui affiche le rendu */
    render(
    <Connexion />,
    document.getElementById('root')
    );

