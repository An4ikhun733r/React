function ProfilePicture(){
    const imageURL = './src/assets/profile.jpg';

    const handeClick = (e) => {
        e.target.style.display = "none";
    }

    return (
        <img onClick={(e) => handeClick(e)} src = {imageURL}></img>
    );
}

export default ProfilePicture;