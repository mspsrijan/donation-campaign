import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import getSavedDonations from "../utils/localStorage";
import SavedDonations from "../components/SavedDonations";

const Donation = () => {
  const donationCollection = useLoaderData();
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const savedDonations = getSavedDonations();
    if (savedDonations.length) {
      const donations = donationCollection.filter((donation) =>
        savedDonations.includes(donation.id)
      );
      setDonations(donations);
    }
  }, [donationCollection]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const maxItemsToShow = showAll ? donations.length : 4;

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 lg:pt-40 pb-10 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {donations.slice(0, maxItemsToShow).map((savedDonations) => (
          <SavedDonations
            key={savedDonations.id}
            savedDonations={savedDonations}
          ></SavedDonations>
        ))}
      </div>

      <div className="mx-auto text-center">
        {!showAll && donations.length > 4 && (
          <button
            onClick={toggleShowAll}
            className="btn text-white bg-[#0052FF] hover:bg-[#0052FF]/80"
          >
            Show All
          </button>
        )}
      </div>
    </>
  );
};

export default Donation;
