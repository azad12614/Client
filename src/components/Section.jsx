import pic1 from "../images/2.png";
function Section() {
  const pic = pic1;
  return (
    <>
      <div className="hero mb-2 max-w-max rounded-lg bg-[#FFFFFF] text-white mx-auto">
        <div className="hero-content flex-row lg:flex-col">
          <img
            src={`${pic}`}
            className="-m-4 max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-5xl text-[#fed7aa] font-bold">Breaking News!</h1>
            <p className="py-6 text-[#000000]">
              10% Discount in every friday and monday!!!!!!!!!
            </p>
            <button className="btn text-center text-white bg-[#3E001F] border-0 m-2">
              Lets do Gaming!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
