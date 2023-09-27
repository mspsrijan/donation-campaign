import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import DonationsCollection from "../components/DonationsCollection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const donationsCollection = useLoaderData();
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(donationsCollection);
  }, [donationsCollection]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedInput = searchInput.toLowerCase().trim();

    if (cleanedInput === "") {
      setFilteredData(donationsCollection);
    } else {
      const filteredItems = donationsCollection.filter(
        (item) =>
          item.category.toLowerCase() === cleanedInput ||
          item.title.toLowerCase().includes(cleanedInput)
      );

      if (filteredItems.length === 0) {
        toast.error("No matching categories/items found.");
        setFilteredData(donationsCollection);
      } else {
        setFilteredData(filteredItems);
      }
    }
  };

  return (
    <div>
      <div className="bg-[url('/images/donation.png')] bg-cover bg-center bg-white/90 bg-blend-overlay w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 lg:pt-40 pb-10 lg:pb-16">
          <h1 className="text-center text-4xl lg:text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          <div className="py-10 text-center max-w-xs md:max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#FF444A]/80 focus:border-[#FF444A]"
                  placeholder="Search here..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A] hover:bg-[#FF444A]/80 focus:ring-2 focus:outline-none focus:ring-[#FF444A]/80 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <DonationsCollection donationsCollection={filteredData} />
    </div>
  );
};

export default Home;
