const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-[#37517e] w-full h-[760px] py-5">
        <div className="flex items-center justify-between w-full h-[526px] mx-[83px] px-12">
          <div className="text-white text-[40px] w-[615px]">
            <h1>Better Solutions For Your Business</h1>
            <p className="mt-5 text-[24px] text-white/60">
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div className="flex mt-5">
              <a
                href=""
                className="block mt-2 py-2 px-5 bg-[#47b2e4] text-white w-[180px] h-[45px] text-center rounded-full text-[16px]"
              >
                Get Started
              </a>
              <a
                href=""
                className="block mt-2 py-2 px-5 text-white w-[147px] h-[45px] text-center rounded-full text-[16px] ml-5 border border-transparent hover:border-white"
              >
                Watch
              </a>
            </div>
          </div>
          <div className="w-[636px] h-[527px]">
            <img src="/public/image1.png" alt="gambar" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
