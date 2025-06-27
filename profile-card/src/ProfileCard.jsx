import './ProfileCard.css'
function ProfileCard({name, age, bio}){
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p><span>About:</span>{bio} </p>
        </div>
    )
}

export default ProfileCard;