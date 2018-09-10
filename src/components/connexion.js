import React from 'react' ;

class Connexion extends React.Component {

    render(){
        return(
        <div className="connexionBox" onSubmit={(e)=>this.goToChat(e)}> {/*Je crée un event pour récup le contenu du pseudo*/}
            <form className="connexion">
            <input type="text" placeholder="Votre pseudo" required/>
            <button type="submit">Accéder au chat</button>
            </form>
            </div>
        )
    }
}

export default Connexion;