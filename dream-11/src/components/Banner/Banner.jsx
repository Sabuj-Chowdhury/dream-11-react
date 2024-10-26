import banner from "../../assets/image/bg-shadow.png";
import mainBanner from "../../assets/image/banner-main.png";
import PropTypes from "prop-types";
const Banner = ({ handleClaimCredit }) => {
  return (
    <div
      className="relative max-w-7xl mx-auto h-96 rounded-lg overflow-hidden flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black  to-blue "></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <img src={mainBanner} alt="Cricket" className="mb-4 h-40 w-auto" />

        <h1 className="text-white text-3xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Beyond Boundaries Beyond Limits
        </p>

        <button
          onClick={() => handleClaimCredit()}
          className="bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 shadow-lg"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleClaimCredit: PropTypes.func,
};
export default Banner;
