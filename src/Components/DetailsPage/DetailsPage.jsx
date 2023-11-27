import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
     const {id}=useParams();
     const intId=parseInt(id)
    const services=useLoaderData()
    const findService=services.find(service=>service.id ===intId)
  
    return (
        <div className="w-10/12 mx-auto my-6">
           <img src={findService.img} className="w-5/12 mx-auto rounded-xl" alt="" />
           <div className="my-4 text-center">
            <h1 className="text-4xl font-medium my-2">{findService.name}</h1>
            <p className="text-2xl font-bold">Price: ${findService.price}</p>
            <p className="text-xl w-3/4 mx-auto">{findService.description}</p>
           <button className="btn btn-primary mt-4 uppercase text-xl">Book Now</button>
           </div>
        </div>
    );
};

export default DetailsPage;