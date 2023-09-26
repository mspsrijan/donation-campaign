import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import getSavedDonations from "../utils/localStorage";
import SavedDonations from "../components/SavedDonations";

const Donation = () => {
  const donationCollection = useLoaderData();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const savedDonations = getSavedDonations();
    if (savedDonations.length) {
      const donations = donationCollection.filter((donation) =>
        savedDonations.includes(donation.id)
      );
      setDonations(donations);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 lg:pt-40 pb-10 lg:pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {donations.map((savedDonations) => (
        <SavedDonations
          key={savedDonations.id}
          savedDonations={savedDonations}
        ></SavedDonations>
      ))}
    </div>
  );
};

export default Donation;
