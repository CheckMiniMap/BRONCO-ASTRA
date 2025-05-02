const Footer = () => {
  return (
    <section className="flex flex-col lg:justify-center items-center lg:flex-row lg:gap-20 gap-10 w-full pt-15 pb-20">
      <div className="flex flex-col sm:w-[420px] w-9/10">
        <h1 className="font-poppins font-semibold text-3xl lg:min-w-[387px]">Contact Project Lead</h1>
        <h4 className="pl-5 pt-1.5 font-semibold">Project Lead / Chief Engineer</h4>
        <p className="pl-10">Matthew Romero: macornejo1@cpp.edu</p>
      </div>
      <div className="flex flex-col sm:w-[420px] w-9/10">
        <h1 className="font-poppins font-semibold text-3xl lg:min-w-[387px]">Location</h1>
        <p className="pl-5 pt-1.5 italic">California State Polytechnic University of Pomona</p>
        <p className="pl-10">3801 West Temple Ave, Pomona, CA, 91768</p>
      </div>
    </section>
  );
}

export default Footer
