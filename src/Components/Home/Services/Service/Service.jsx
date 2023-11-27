

const Service = ({service}) => {
  const {name,img,price,description}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-72 h-52" />
        </figure>
        <div className="card-body  text-left">
          <h2 className="card-title ">{name}</h2>
          <p>{description.slice(0,100)} ...</p>
          <div className="card-actions">
            <button className="btn btn-primary w-52 mx-auto">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default Service;