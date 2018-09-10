import React from 'react' ;
/*Affichage*/ 
import {render} from 'react-dom';
/*CSS*/
import './index.css';
/*Component*/
import Connexion from './components/connexion';
import App from './components/app' ;


    /* fonction qui affiche le rendu */
    render(
    <App />,
    document.getElementById('root')
    );

