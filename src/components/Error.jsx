const Error = () => {
  return (
    <div>
      <div className="fontInter max-w-7xl mx-auto text-center px-6 md:px-10 lg:px-16 py-10 lg:py-16">
        <h1 className="mb-4 text-7xl font-extrabold lg:text-9xl text-primary-600">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Somethings missing.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we cant find that page. Youll find lots to explore on the home
          page.
        </p>
        <button className="btn bg-[#FF444A] hover:bg-[#FF444A]/80 mt-5">
          <a href="/" className="text-white">
            Back to Homepage
          </a>
        </button>
      </div>
    </div>
  );
};

export default Error;
