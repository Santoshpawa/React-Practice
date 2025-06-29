import "./Card.css";
export default function Card({ name, email, address }) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>Email : {email}</p>
      <p>City : {address.city}</p>
    </div>
  );
}
