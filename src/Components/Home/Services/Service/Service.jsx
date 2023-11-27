import { Link } from "react-router-dom";


const Service = ({service}) => {
  const {name,img,description,id}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-72 h-52" />
        </figure>
        <div className="card-body  text-left">
          <h2 className="card-title ">{name}</h2>
          <p>{description.slice(0,50)} ...</p>
          <div className="card-actions ">
      <Link to={`/services/${id}`}>            <button className="btn btn-primary w-32 text-xl mx-auto">Details</button>
</Link>
          </div>
        </div>
      </div>
    );
};

export default Service;