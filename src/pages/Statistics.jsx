import { useLoaderData } from "react-router-dom";
import DonationPieChart from "../components/DonationPieChart";
import getSavedDonations from "../utils/localStorage";

const Statistics = () => {
  const donationsCollection = useLoaderData();
  const savedDonations = getSavedDonations();

  const singleDonationPerchantage = (
    100 / donationsCollection.length
  ).toPrecision(2);

  const yourDonations = savedDonations.length * singleDonationPerchantage;
  const totalDonations = 100 - yourDonations;

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16 pt-32 lg:pt-40 pb-10 lg:pb-16">
      <DonationPieChart
        totalDonations={totalDonations}
        yourDonations={yourDonations}
      />
    </div>
  );
};

export default Statistics;
