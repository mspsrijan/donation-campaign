import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SavedDonations = ({ savedDonations }) => {
  const {
    id,
    cover_image,
    title,
    category,
    price,
    category_bg_color,
    card_bg_color,
    text_and_btn_bg_color,
  } = savedDonations || {};
  return (
    <div>
      <div
        style={{ background: card_bg_color }}
        className="rounded-lg hover:shadow-md duration-300 flex flex-col md:flex-row items-start md:items-center gap-4"
      >
        <img
          src={cover_image}
          alt="{title}"
          className="w-full md:w-[220px] h-[200px] md:rounded-l-lg object-cover"
        />
        <div className="p-6 md:p-4 flex flex-col gap-3 md:gap-1 items-start">
          <h6
            style={{
              color: text_and_btn_bg_color,
              background: category_bg_color,
            }}
            className="px-3 py-1 rounded-md text-sm font-medium"
          >
            {category}
          </h6>
          <h3 className="text-lg font-semibold text-black">{title}</h3>

          <h5
            style={{ color: text_and_btn_bg_color }}
            className="text-lg font-semibold"
          >
            {price}
          </h5>
          <Link to={`/donations/${id}`}>
            <button
              style={{
                background: text_and_btn_bg_color,
              }}
              className="btn mt-3 text-white hover:scale-[1.02] normal-case"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SavedDonations.propTypes = {
  savedDonations: PropTypes.object,
};

export default SavedDonations;
