import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getSavedDonations from "../utils/localStorage";

const SingleDonation = () => {
  const donationsCollection = useLoaderData();
  const { donationId } = useParams();

  const donation = donationsCollection.find(
    (donation) => donation.id == donationId
  );
  const { id, cover_image, title, description, price, text_and_btn_bg_color } =
    donation;

  const handleSaveDonations = () => {
    const savedDonations = getSavedDonations();
    if (!savedDonations.includes(id)) {
      savedDonations.push(id);
      localStorage.setItem("donations", JSON.stringify(savedDonations));
      toast.success(`Thanks! You have successfully donated ${price}.`);
    } else {
      toast.error("You have already donated.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-10 lg:pb-16 flex flex-col gap-5">
      <div className="relative">
        <img
          src={cover_image}
          alt=""
          className="w-full rounded-lg max-h-[600px] object-cover"
        />
        <div className="absolute bg-[#0b0b0b80] w-full bottom-0 p-6">
          <button
            onClick={handleSaveDonations}
            style={{ background: text_and_btn_bg_color }}
            className="btn px-10 border-0 rounded-r-md text-white hover:scale-105"
          >
            Donate {price}
          </button>
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
        </div>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-black mt-5">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default SingleDonation;
