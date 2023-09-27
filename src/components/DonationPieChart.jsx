import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonationPieChart = ({ yourDonations, totalDonations }) => {
  const data = {
    labels: ["Your Donations", "Total Donations"],
    datasets: [
      {
        data: [yourDonations, totalDonations],
        backgroundColor: ["#00C49F", "#FF444A"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

DonationPieChart.propTypes = {
  totalDonations: PropTypes.number,
  yourDonations: PropTypes.number,
};

export default DonationPieChart;
