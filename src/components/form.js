import React from 'react' ;

class Form extends React.Component {

    render(){
        return(
            //Formualire de saisie de message
        <form className="form">
            <textarea required maxLength="140"></textarea>
            <div className="info">140</div>
            <button type="submit">Envoyer</button>
        </form>
        )
    }
}

export default Form;