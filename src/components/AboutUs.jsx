import pic from "../images/about.jpg";
import pic1 from "../images/office.jpg";
import pic2 from "../images/avator.png";
function AboutUs() {
  return (
    <div className="hero w-fit mx-auto">
      <div className="hero-content flex-col lg:flex-row text-white bg-[#161A30] m-3">
        <img src={`${pic}`} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <p className="text-xl font-semibold">About Us</p>
          <h1 className="text-3xl font-bold">You favourite game awaites!</h1>
          <p className="py-6">
            Welcome to Game_Hub, your one-stop shop for all things gaming! We're
            passionate about games and we're here to help you find the perfect
            game for your every mood. Whether you're looking for a new release,
            a classic favorite, or something in between, we have something for
            everyone.
          </p>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl">Genre</h1>
              <div className="flex items-center gap-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/022/707/726/large_2x/generative-ai-illustration-of-gaming-background-abstract-cyberpunk-style-of-gamer-wallpaper-neon-glow-light-of-scifi-fluorescent-sticks-digitally-generated-image-photo.jpeg"
                  width={60}
                  alt=""
                />
                <h1 className="text-xl text-teal-400">35</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl">Outlets</h1>
              <div className="flex items-center gap-4">
                <img src={`${pic1}`} width={60} alt="" />
                <h1 className="text-xl text-teal-400">50</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl">Users</h1>
              <div className="flex items-center gap-4">
                <img src={`${pic2}`} width={60} alt="" />
                <h1 className="text-xl text-teal-400">10M+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
