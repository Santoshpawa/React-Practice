import './Card.css'
export default function Card({name, age}){
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Age : {age}</p>

        </div>
    )
}