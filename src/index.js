import React from 'react' ;
/*Affichage*/ 
import {render} from 'react-dom';
/*CSS*/
import './index.css';
/*Component*/
import Connexion from './components/connexion';
import App from './components/app' ;
import NotFound from './components/notfound';
/*Rooter*/
import {BrowserRouter, Match, Miss} from 'react-router';
/*BrowserRouter :Création d'un component pour indiquer tous nos différents de route*/ 
/*Match : Si un component exsiste, il nous emmene directement celui-ci*/
/*Miss : Si un component n'existe pas, erreur*/

const Root = () => {
    return (
        <BrowserRouter>
        <div>
            <Match exactly pattern="/" component={Connexion} /> {/* Affichage de la page d'accueil*/}
            <Match pattern="/pseudo/:pseudo" component={App} /> {/* Redirection vers le pseudo existant*/}
            <Miss component={NotFound} /> {/* Redirection vers le component NotFound*/}
        </div>
        </BrowserRouter>
    )
}

    /* fonction qui affiche le rendu */
    render(
    <Root />,
    document.getElementById('root')
    );

