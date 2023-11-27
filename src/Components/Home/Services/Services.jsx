import { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [serviceLength,setServiceLength]=useState(3)
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold text-red-700 text-center my-3">
        Our All Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
        {services.slice(0,serviceLength).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className={serviceLength === services.length && "hidden"}>
        <button
          onClick={() => setServiceLength(services.length)}
          className="w-32 ml-[700px]  my-10 btn btn-primary text-white text-xl"
        >
          See More
        </button>
      </div>{" "}
    </div>
  );
};

export default Services;
