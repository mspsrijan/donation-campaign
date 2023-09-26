import { useLoaderData, useParams } from "react-router-dom";

const SingleDonation = () => {
  const donationsCollection = useLoaderData();
  const { donationId } = useParams();

  const donation = donationsCollection.find(
    (donation) => donation.id == donationId
  );
  const { id, cover_image, title, description, price, text_and_btn_bg_color } =
    donation;

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
            style={{ background: text_and_btn_bg_color }}
            className="btn px-10 border-0 rounded-r-md text-white hover:scale-105"
          >
            Donate {price}
          </button>
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
