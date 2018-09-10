import React from 'react' ;
//Components
import Form from './form';
import Message from './message';

class App extends React.Component {

    render(){
        return(
            //Un début d'application de chat (message+form)
            <div className="box">
                <div>
                   <div className="messages">
                        <Message /> {/* Exemple de message*/}
                   </div>
                    <Form /> {/* Creation d'un composant formulaire pour saisir le message*/}
            </div>
            </div>
        )
    }
}

export default App;