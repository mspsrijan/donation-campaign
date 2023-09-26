const getSavedDonations = () => {
  const savedDonations = localStorage.getItem("donations");
  if (savedDonations) {
    return JSON.parse(savedDonations);
  } else {
    return [];
  }
};

export default getSavedDonations;
