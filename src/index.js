import React from 'react' ;
/*Affichage*/ 
import {render} from 'react-dom';
/*CSS*/
import './index.css';
/*Importer un component*/
import Connexion from './components/connexion' 


    /* fonction qui affiche le rendu */
    render(
    <Connexion />,
    document.getElementById('root')
    );

