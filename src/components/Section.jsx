import pic1 from "../images/2.png";

function Section() {
  const pic = pic1;
  return (
    <>
      <div className="hero mt-2 max-w-max rounded-lg bg-[#CCCCCC] text-white mx-auto">
        <div className="hero-content flex-row lg:flex-col">
          <img src={`${pic}`} className="-m-4 max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl text-[#161A30] font-bold">
              Breaking News!
            </h1>
            <p className="py-6 text-xl text-[#000000]">
              10% Discount in every friday and monday!!!!!!!!!
            </p>
            <button className="btn text-center text-[#fed7aa] bg-[#31304D] hover:bg-transparent border-0">
              Lets do Gaming!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
