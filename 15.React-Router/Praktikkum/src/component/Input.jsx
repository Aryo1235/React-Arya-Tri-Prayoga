const Input = () => {
  return (
    <>
      <section className="bg-[#f3f5fa] flex flex-col items-center py-10">
        <h2 className="text-center pt-10 pb-4 text-2xl font-semibold">
          Join Our Newsletter
        </h2>
        <p className="text-center text-gray-600">
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div className="mt-8">
          <form className="flex mt-8 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border border-gray-300 rounded-full text-[16px] w-[636px] focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#47b2e4] text-white rounded-full text-[16px] ml-[-50px] border border-[#47b2e4] hover:bg-[#0056b3] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Input;
