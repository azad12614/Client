function Section() {
  return (
    <>
      <div className="hero my-2 max-w-7xl rounded-lg bg-[#FFFFFF] text-white mx-auto">
        <div className="hero-content flex-row lg:flex-col">
          <img
            src="https://picsum.photos/300/300"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl text-[#fed7aa] font-bold">Box Office News!</h1>
            <p className="py-6 text-[#000000]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0 m-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
