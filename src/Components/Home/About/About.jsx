const About = () => {
  return (
    <div className="hero  lg:p-6 w-11/12 mx-auto rounded-lg bg-base-200  my-6">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12">
        <img
          src="https://i.ibb.co/RTwGDnj/about.jpg" className="w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold text-center">About Us</h1>
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
  );
};

export default About;
