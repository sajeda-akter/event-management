

const Blogs = () => {
    return (
        <div>
            <h1 className=" text-3xl  my-6 lg:text-4xl font-bold text-indigo-600 text-center">Our Events Blogs</h1>
             <div className="hero  lg:p-6 w-11/12 mx-auto rounded-lg bg-base-200  my-6">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-12">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKelj_h8FV5eIKheOFuY-4qspnaVZIrjhoGQ&usqp=CAU" className="w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="lg:text-4xl text-3xl font-bold text-center">Birthday Events</h1>
          <p className="py-6 text-xl">
            {" "}
            You can always be creative with your table decorations. Think of
            something unique to attract the attention of your guests.Our
            decoration services include dessert tables, photo backdrop set up
            (photo booth), photo display set up, aisle decoration, stage
            decoration, entrance arch.
          </p>
          {/* <button className="btn btn-primary">More Details</button> */}
        </div>
      </div>
    </div>
    <div className="hero  lg:p-6 w-11/12 mx-auto rounded-lg bg-base-200  my-6">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-12">
       
        <div>
          <h1 className="lg:text-4xl text-3xl font-bold text-center">Wedding Event Mangement</h1>
          <p className="py-6 text-xl">
            {" "}
            You can always be creative with your table decorations. Think of
            something unique to attract the attention of your guests.Our
            decoration services include dessert tables, photo backdrop set up
            (photo booth), photo display set up, aisle decoration, stage
            decoration, entrance arch.
          </p>
         
        </div>
        <img
          src="https://i.ibb.co/RTwGDnj/about.jpg" className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
    <div className="hero  lg:p-6 w-11/12 mx-auto rounded-lg bg-base-200  my-6">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoteDoU3kHemNy2A_em4W9iV0fq5aDb4UC6Q&usqp=CAU" className="w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="lg:text-4xl text-3xl font-bold text-center">Baby Shower Events</h1>
          <p className="py-6 text-xl">
            {" "}
            You can always be creative with your table decorations. Think of
            something unique to attract the attention of your guests.Our
            decoration services include dessert tables, photo backdrop set up
            (photo booth), photo display set up, aisle decoration, stage
            decoration, entrance arch.
          </p>
        
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blogs;