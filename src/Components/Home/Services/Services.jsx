import { useEffect, useState } from "react";
import Service from "./Service/Service";


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  
    return (
        <div className="mt-24">
            <h1 className="text-4xl font-bold text-red-700 text-center my-3">Our All Services</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
{
    services.map(service=><Service key={service.id} service={service}></Service>)
}

           </div>
        </div>
    );
};

export default Services;