import React from 'react' ;

class Message extends React.Component {

    render(){
        return(
            //Exemple d'un message
        <p className="user-message">
        {/*Appel de la prop contenu dans app.js*/}
        {this.props.pseudo} : Test
        </p>
        )
    }
}

export default Message;