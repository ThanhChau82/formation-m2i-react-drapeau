// import
import React from 'react';
import ReactDOM from 'react-dom';

// Créer le composant
class App extends React.Component {
    state = {latitude : 0, longitude : 0, messageErreur : ''};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
               this.setState({latitude : position.coords.altitude, longitude : position.coords.longitude});                
            },
            erreur => {
                this.setState({messageErreur : erreur.message});
            }
        )
    }

    render() {
        if(this.state.latitude != 0 && this.state.longitude != 0 && this.state.messageErreur == '') {
            return (
                <div>Drapeau du pays : </div>
            )
        } else if (this.state.latitude == 0 && this.state.longitude == 0 && this.state.messageErreur != '') {
            return (
                <div>Erreur : {this.state.messageErreur}</div>
            )
        } else {
            return (
                <div>En cours de chargement</div>
            )
        }
    }
}

ReactDOM.render (
    <App/>,
    document.getElementById("root")
);