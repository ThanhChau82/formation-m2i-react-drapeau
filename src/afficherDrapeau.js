// Récupérer la position de l'utilisateur (latitude et longitude)
// Afficher le drapeau correspondant à la position.

const AfficherDrapeau = (props) => { // Récupérer les paramètres (latitude et longitude) depuis le composant index.js
    let drapeau = getDrapeau(props.latitude, props.longitude);
    console.log(drapeau);
    return (
        <div style={{backgroundColor : 'grey'}}>
            <div>Latitude : { props.latitude }</div>
            <div>Longitude : { props.longitude }</div>
            <div>Drapeau du pays : </div>
            <div style={{marginLeft : '10px'}}><img src={drapeau}/></div>
        </div>
        
    )
    
}

const getDrapeau = (latitude, longitude) => {
    let listePays = [
        {
            latitude : 52.520007, 
            longitude : 13.404954, 
            capital : 'Berlin', 
            drapeau : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png'
        },
        {
            latitude : 51.507351, 
            longitude : -0.127758, 
            capital : 'London', 
            drapeau : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/langfr-225px-Flag_of_the_United_Kingdom.svg.png'
        },
        {
            latitude : 55.755826, 
            longitude : 37.6173, 
            capital : 'Moscow', 
            drapeau : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/langfr-225px-Flag_of_Russia.svg.png'
        },
    ]

    let paysFiltre = listePays.filter(p => p.latitude == latitude && p.longitude == longitude);
    if(paysFiltre.length > 0) {
        return paysFiltre[0].drapeau;
    }

    return '';
}

export default AfficherDrapeau;