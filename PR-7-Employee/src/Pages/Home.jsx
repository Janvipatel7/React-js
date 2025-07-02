import React from 'react';
const Home = () => {
  return (
    <>
      <section className="bg-[#D9F1FF] h-screen py-16">
        <div className="container mx-auto ">
          <div className="row grid lg:grid-cols-2 gap-10 items-center">
              <div className="col flex justify-center items-center">
                <img src="/Images/Home-Banner-img-01.png" alt="Team" className="w-full max-w-md z-10"/>
              </div>
            <div className="col">
              <div className="col text-center lg:text-left">
                <p className="text-[#1268fb] font-medium mb-4 px-4 py-1 inline-block rounded-full border border-blue-300 bg-white/70 backdrop-blur">
                  Discover, Engage, Empower
                </p>

                <h1 className="text-3xl md:text-4xl xl:text-6xl font-[700px] leading-tight text-[#081d45] mb-6">
                  Unlocking Potential,<br />One Hire At A Time
                </h1>

                <p className="text-gray-700 text-lg mb-8">
                  Transform your workplace with our innovative HR solutions! Empower your team with seamless recruitment, engagement, and development tools.
                </p>

                <div className="row flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="col-auto">
                    <button className="flex items-center justify-between gap-4 px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold tracking-wide text-sm rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                      <span className="tracking-wider">GET A QUOTE</span>
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#010e37]">
                        <i className="ri-arrow-right-up-line text-white text-lg"></i>
                      </div>
                    </button>

                  </div>

                  <div className="col-auto">
                    <button className="flex items-center justify-between gap-4 px-6 py-3 bg-[#010e37] text-white font-semibold rounded-2xl border border-blue-500 shadow-md hover:shadow-lg transition duration-300">
                      <span>EXPLORE SERVICES</span>
                      <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
                        <i className="ri-arrow-right-up-line text-white text-lg"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
