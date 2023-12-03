function Hero() {
  return (
    <>
      <div
        className="hero mx-auto mb-2 max-w-screen min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.wired.com/photos/62855b1bb6cfd378a30c474a/master/w_1920,c_limit/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="my-1 text-[#fed7aa] text-center text-5xl font-bold">
              3A GAMING WORLD!
            </h1>
            <h1 className="my-1 text-[#F11A7B] text-center text-5xl font-bold">
              IT'S TIME TO UP YOUR GAME
            </h1>
            <h1 className="my-1 text-[#FFFFFF] text-center text-5xl font-bold">
              GET OVERWORLD TODAY!
            </h1>
            <button className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0 m-2">
              Get Started
            </button>
            <button className="btn text-center text-white bg-[#3E001F] hover:bg-transparent border-0 m-2">
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
