function Section() {
  return (
    <>
      <div className="hero my-2 max-h-96 bg-base-100 text-white">
        <div className="hero-content flex-row lg:flex-col">
          <img
            src="https://picsum.photos/300/300"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
