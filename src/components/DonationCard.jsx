import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donationCard }) => {
  const {
    id,
    cover_image,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_and_btn_bg_color,
  } = donationCard || {};
  return (
    <div>
      <Link to={`/donations/${id}`}>
        <div
          style={{ background: card_bg_color }}
          className="rounded-lg hover:scale-[1.02] hover:shadow-md duration-300"
        >
          <img src={cover_image} alt="{title}" className="w-full" />
          <div className="p-4 flex flex-col gap-1 items-start">
            <h6
              style={{
                color: text_and_btn_bg_color,
                background: category_bg_color,
              }}
              className="px-3 py-1 rounded-md text-sm font-medium"
            >
              {category}
            </h6>
            <h3
              style={{ color: text_and_btn_bg_color }}
              className="text-lg font-semibold"
            >
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

DonationCard.propTypes = {
  donationCard: PropTypes.object.isRequired,
};

export default DonationCard;
