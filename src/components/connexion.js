import React from 'react' ;

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

export default Connexion