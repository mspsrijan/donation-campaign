import PropTypes from "prop-types";
import DonationCard from "./DonationCard";

const DonationsCollection = ({ donationsCollection }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {donationsCollection.map((donationCard) => (
        <DonationCard
          key={donationCard.id}
          donationCard={donationCard}
        ></DonationCard>
      ))}
    </div>
  );
};

DonationsCollection.propTypes = {
  donationsCollection: PropTypes.array.isRequired,
};

export default DonationsCollection;
