import PropTypes from "prop-types";
const SingleDonation = ({ singleDonation }) => {
  const {
    cover_image,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_and_btn_bg_color,
  } = singleDonation || {};
  return (
    <div style={{ background: card_bg_color }} className="rounded-lg">
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
  );
};

SingleDonation.propTypes = {
  singleDonation: PropTypes.object.isRequired,
};

export default SingleDonation;
