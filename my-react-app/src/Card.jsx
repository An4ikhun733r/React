import profilePic from './assets/profile.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">An4ikhUN733R</h2>
            <p className="card-text">React Forever</p>
        </div>
    );
}

export default Card;