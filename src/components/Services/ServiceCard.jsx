import "./ServiceCard.css";
function ServiceCard({ title, content,image }) {
  return (
      <div className="card">
          <img src={image} alt={image}/>
      <p className="card-title text-[#fffffe]">{title}</p>
      <p className="card-des">{content}</p>
    </div>
  );
}

export default ServiceCard;
