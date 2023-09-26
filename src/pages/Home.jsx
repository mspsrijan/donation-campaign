import { useLoaderData } from "react-router-dom";
import DonationsCollection from "../components/DonationsCollection";

const Home = () => {
  const donationsCollection = useLoaderData();

  return (
    <div>
      <div className="bg-[url('/images/donation.png')] bg-cover bg-center bg-white/90 bg-blend-overlay w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 lg:pt-40 pb-10 lg:pb-16">
          <h1 className="text-center text-4xl lg:text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          <div className="py-10 text-center">
            <div className="join">
              <form action="">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  className="input input-bordered join-item outline-0 focus:border-1 focus:outline-0"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn join-item border-0 rounded-r-md text-white bg-[#FF444A] hover:bg-[#FF444A]/80"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <DonationsCollection
        donationsCollection={donationsCollection}
      ></DonationsCollection>
    </div>
  );
};

export default Home;
