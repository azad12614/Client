import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div
        className="hero mx-auto w-screen h-screen"
        style={{
          backgroundImage:
            "url(https://media.wired.com/photos/62855b1bb6cfd378a30c474a/master/w_1920,c_limit/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="my-2 text-[#fed7aa] text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              3A GAMING WORLD!
            </h1>
            <h1 className="my-2 text-[#F11A7B] text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              IT'S TIME TO UP YOUR GAME
            </h1>
            <h1 className="my-2 text-[#FFFFFF] text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              GET OVERWORLD TODAY!
            </h1>
            <Link to={"/view-product"}>
              <button className="px-10 btn text-center sm:text-lg md:text-xl lg:text-2xl text-[#FFFFFF] bg-[#F11A7B] hover:bg-transparent border-0 mt-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
